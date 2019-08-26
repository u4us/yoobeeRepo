// //mongoosejs
// //postman

var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
// 7.	include dependency
var fileUpload = require('express-fileupload');

var Project = require('./project-model');

var connectionString = 'mongodb://peter:peter12345@cluster0-shard-00-00-9k4xm.mongodb.net:27017,cluster0-shard-00-01-9k4xm.mongodb.net:27017,cluster0-shard-00-02-9k4xm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(connectionString,{ useNewUrlParser: true });
var  db = mongoose.connection;
db.once('open', () => console.log('Database connected'));
db.on('error', () => console.log('Database error'));


var app = express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(logger('dev'));
// 8.	use
app.use((fileUpload()));



var router = express.Router();

// 3. 	dd public, schema
app.use(express.static('public'));
// 6. 	upload route, postman requires 'form-data' format instead of encoded
//		install fileupload express: npm install --save express-fileupload
router.post('/upload',(req,res)=>{
	//index it into a list
	//turn key and value into an array index and value
	var files = Object.values(req.files);
	var uploadedFile = files[0];
	console.log(uploadedFile); //shows MoVe function to move the file from memory

	var newName = Date.now()+uploadedFile.name;//guarantees unique
	//uploadedFile.mv('name',callback when function completes);
	uploadedFile.mv('public/'+newName, function(){
		res.send(newName);
	});

	return res.json(files);
})

router.get('/testing', (req, res) => {
  res.send('<h1>Testing is working</h1>')
})

router.get('/projects', (req, res) => {

	Project.find()
	.then((projects) => {
	    return res.json(projects);
	});

})

router.get('/projects/:id', (req, res) => {

	Project.findOne({id:req.params.id})
	.then((project) => {
	    return res.json(project);
	});
})

router.post('/projects', (req, res) => {

	var project = new Project();
	project.id = Date.now();
	
	var data = req.body;
	Object.assign(project,data);
	
	project.save()
	.then((project) => {
	  	return res.json(project);
	});
});

router.delete('/projects/:id', (req, res) => {

	Project.deleteOne({ id: req.params.id })
	.then(() => {
		return res.json('deleted');
	});
});

router.put('/projects/:id', (req, res) => {

	Project.findOne({id:req.params.id})
	.then((project) => {
		var data = req.body;
		Object.assign(project,data);
		return project.save()	
	})
	.then((project) => {
		return res.json(project);
	});	

});

// 3. add get types
router.get('/types', (req, res) => {
	Type.find()
	.then((types) => {
	    return res.json(types);
	});
})

app.use('/api', router);

const apiPort = 3001;
app.listen(apiPort, () => console.log('Listening on port '+apiPort));