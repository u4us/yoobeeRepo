var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');

var User = require('./user-model');

// /test database by default, change to /blog
//setup database connection
var connectionString = 'mongodb://admin:admin@cluster0-shard-00-00-rvdox.mongodb.net:27017,cluster0-shard-00-01-rvdox.mongodb.net:27017,cluster0-shard-00-02-rvdox.mongodb.net:27017/blog?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(connectionString,{ useNewUrlParser: true });
var db = mongoose.connection;
db.once('open', () => console.log('Database connected'));
db.on('error', () => console.log('Database error'));

//setup express server
var app = express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(logger('dev'));

//setup routes
var router = express.Router();

router.get('/testing', (req, res) => {
  res.send('<h1>Testing is working</h1>')
})

//GET all
router.get('/users', (req, res) => {
	User.find()
	.then((item) => {
	    return res.json(item);
	});
})


//GET id
router.get('/users/:id', (req, res) => {
	User.findOne({id:req.params.id})
	.then((item) => {
	    return res.json(item);
	});
})

//POST - merge with existing data
router.post('/users', (req, res) => {

	var user = new User();
	user.id = Date.now();
	
	var data = req.body;
	Object.assign(user,data);
	
	user.save()
	.then((item) => {
	  	return res.json(item);
	});
});

//DELETE
router.delete('/users/:id', (req, res) => {
	User.deleteOne({ id: req.params.id })
	.then(() => {
		return res.json('deleted');
	});
});

//PUT id
router.put('/users/:id', (req, res) => {

	User.findOne({id:req.params.id})
	.then((item) => {
		var data = req.body;
		Object.assign(item,data);
		return item.save()	
	})
	.then((item) => {
		return res.json(item);
	});	

});

app.use('/api', router);

// launch our backend into a port
const apiPort = 3001;
app.listen(apiPort, () => console.log('Listening on port '+apiPort));