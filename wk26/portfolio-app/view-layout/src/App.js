import React from 'react';
import axios from 'axios'
import View from './View'
import Project from './Project'
import AddForm from './AddForm'
import EditForm from './EditForm'
import './App.css';

// in the spirit of react, components should be unmounted when not in view.
// remove activeView concept 23.

// var urlPrefix = 'https://10.4.24.22:3001/api'
// var urlPrefix = 'http://localhost:3001/api'
var urlPrefix = 'http://10.2.24.38:4000/api'


class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			activeView: 'projects',
			projects:[
				{
					id: 1,
					name: 'build a hut',
					description: 'not so nice project'
				},{
					id: 2,
					name:'make a basket',
					description:'not so pretty project'
				}
			],
			projectToUpdate: null,
		}
	}
// 16. setProjectToUpdate, push the selected content from the list and push to projectToUpdate
	setProjectToUpdate = (id) =>{
		//array.find(), returns found item
		var foundProject = this.state.projects.find((project)=>{
			return project.id === id;
		});
		this.setState({projectToUpdate: foundProject});
	}

//3. create GET POST methods
	setActiveView = (view)=>{
		this.setState({activeView: view})
	}
//fetch() is only get; npm i --save AXIOS; import
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
// 9. DELETE
// RESTful route table
	deleteProject = (id) =>{
		axios.delete(urlPrefix+'/projects/'+id)
		.then(res=>{
			this.getProjects();
		})
	}
// 11. update function
	updateProject = (id, data) =>{
		axios.put(urlPrefix+'/projects/'+id,data)
		.then(res=>{
			// console.log(res)
			this.getProjects();
		})
	}

	componentDidMount(){
		this.getProjects();
	}


//1. create project component
//2. create projects states and pass to Project
	render(){
		return(
			<div className="app">

				<View>

					<View viewName="projects" activeView={this.state.activeView} className="color1">
						<div className="header"><i className="fas fa-bars" onClick={()=>{this.setActiveView('nav')}}></i></div>
						<div className="main">
							
							<h3>Projects</h3>
							
							{
								//run for each project array item
								this.state.projects.map((project)=>{
									var projectProps = {
										...project,
										key: project.id,
// 10. pass delete function to Project component
										deleteProject: this.deleteProject,
// 14. pass setActiveView 
										setActiveView: this.setActiveView,
// 17. pass setProjectToUpdate
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
{/* 4. separate into form component to isolate onchange events */}
{/* 7. pass addProject function to AddForm component */}
{/* 8. pass setActiveView  */}

							<AddForm addProject={this.addProject} setActiveView={this.setActiveView}/>

						</div>
					</View>
{/* 12. edit tab */}
					<View viewName="edit-project" activeView={this.state.activeView} className="color3">
						<div className="header"><i onClick={()=>{this.setActiveView('projects')}} className="fas fa-times"></i></div>
						<div className="main">
							<h3>Edit-Project</h3>
{/* //15. EditForm component*/}
{/* 19. spread data to form */}
{/* 21. pass update and setActiveView */}
							<EditForm {...this.state.projectToUpdate} updateProject={this.updateProject} setActiveView={this.setActiveView}/>
						</div>
					</View>

					<View viewName="nav" activeView={this.state.activeView} className="color4">
						<div className="header"><i className="fas fa-times"></i></div>
						<div className="main">

						<ul className="menu">
							<li><a onClick={()=>{this.setActiveView('projects')}} className="color1" href="#">Project</a></li>
							<li><a onClick={()=>{this.setActiveView('add-project')}} className="color2" href="#">Add-project</a></li>
							{/* <li><a onClick={()=>{this.setActiveView('edit-project')}} className="color3" href="#">Edit-project</a></li> */}

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