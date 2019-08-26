import React from 'react';
import axios from 'axios'
import View from './View'
import Project from './Project'
import AddForm from './AddForm'
import EditForm from './EditForm'
import './App.css';

// 1.	update server
//		create public server folder, content is available to people on the net via ip/example.jpg

// var urlPrefix = 'https://10.4.24.22:3001/api'
// var urlPrefix = 'http://localhost:3001/api'
var urlPrefix = 'http://10.2.24.43:4000/api'

class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			activeView: 'projects',
			projects:[
				// {
				// 	id: 1,
				// 	name: 'build a hut',
				// 	description: 'not so nice project'
				// },{
				// 	id: 2,
				// 	name:'make a basket',
				// 	description:'not so pretty project'
				// }
			],
			projectToUpdate: null,

			types: [],
			currentType: null,
		}
	}
// 9. uploadfile method, form data must be passed, json will not work
	uploadFile = (formData) =>{
		//returns a promise
		var setting = { headers: {'Content-Type': 'multipart/form-data' }};
		return axios.post(urlPrefix+'/upload', formData, setting)
		//pass component to addForm, cannot be tested with $r.upload cannot no input a file
	}

	getTypes = () =>{
		axios.get(urlPrefix+'/types')
		.then(res=>{
			console.log(res);
			this.setState({types:res.data})
		})
	}

	setCurrentType = (id) =>{
		var foundType = this.state.types.find((type)=>{
			return type.id == id;
		});

		//if found; set type, else null
		foundType 
		? this.setState({currentType: foundType})
		: this.setState({currentType: null})
		
	}

	handleProjectTypeClick = (e) =>{
		//add the targets
		//dataset.type = data-type

		var link = e.target;
		this.setCurrentType(link.dataset.type);
		this.setActiveView('projects');
	}

	setProjectToUpdate = (id) =>{
		var foundProject = this.state.projects.find((project)=>{
			return project.id === id;
		});
		this.setState({projectToUpdate: foundProject});
	}

	setActiveView = (view)=>{
		this.setState({activeView: view})
	}

	getProjects = () =>{
		axios.get(urlPrefix+'/projects')
		.then(res=>{
			console.log(res);
			this.setState({projects:res.data})
		})
	}

	addProject = (data) =>{
		axios.post(urlPrefix+'/projects',data)
		.then(res=>{
			this.getProjects();
		})
		
	}

	deleteProject = (id) =>{
		axios.delete(urlPrefix+'/projects/'+id)
		.then(res=>{
			this.getProjects();
		})
	}

	updateProject = (id, data) =>{
		axios.put(urlPrefix+'/projects/'+id,data)
		.then(res=>{
			this.getProjects();
		})
	}

	componentDidMount(){
		this.getProjects();
		this.getTypes();
	}

	render(){

		var {currentType, projects} = this.state;
		if(currentType){
			projects = projects.filter(project =>{
				return project.type_id == currentType.id;
			})
		}

		return(
			<div className="app">

				<View>

					<View viewName="projects" activeView={this.state.activeView} className="color1">
						<div className="header"><i className="fas fa-bars" onClick={()=>{this.setActiveView('nav')}}></i></div>
						<div className="main">
							<h3>{currentType? currentType.name: 'All Projects'}</h3>
							
							{
								projects.map((project)=>{
									var projectProps = {
										...project,
										key: project.id,
										deleteProject: this.deleteProject,
										setActiveView: this.setActiveView,
										setProjectToUpdate: this.setProjectToUpdate,
									}
									return (<Project {...projectProps} />)
								})
							}

						</div>
					</View>

					<View viewName="add-project" activeView={this.state.activeView} className="color2">
						<div className="header"><i onClick={()=>{this.setActiveView('projects')}} className="fas fa-times"></i></div>
						<div className="main">
							<h3>Add-Project</h3>
							{/* pass to component */}
							<AddForm uploadFile={this.uploadFile} addProject={this.addProject} setActiveView={this.setActiveView}/>

						</div>
					</View>

					<View viewName="edit-project" activeView={this.state.activeView} className="color3">
						<div className="header"><i onClick={()=>{this.setActiveView('projects')}} className="fas fa-times"></i></div>
						<div className="main">
							<h3>Edit-Project</h3>
							<EditForm {...this.state.projectToUpdate} updateProject={this.updateProject} setActiveView={this.setActiveView}/>
						</div>
					</View>

					<View viewName="nav" activeView={this.state.activeView} className="color4">
						<div className="header"><i className="fas fa-times"></i></div>
						<div className="main">

						<ul className="menu">
							<li><a data-type="null" onClick={this.handleProjectTypeClick} className="color1" href="#">Project</a></li>
							<li><a onClick={()=>{this.setActiveView('add-project')}} className="color2" href="#">Add-project</a></li>

							{
								this.state.types.map(type =>{
									return (
										<li>
											<a data-type={type.id} onClick={this.handleProjectTypeClick} className="color1" href="#">{type.name}</a>
										</li>
									)
								})
							}
						</ul>
						</div>
					</View>

				</View>
			</div>
		)
	}
}

export default App;

//react w. redux