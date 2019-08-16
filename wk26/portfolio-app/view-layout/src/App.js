import React from 'react';
import Axios from 'axios'
import View from './View'
import Project from './Project'
import './App.css';

// var urlPrefix = 'https://10.4.24.22:3001/api'
var urlPrefix = 'http://localhost:3001/api'


class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			activeView: 'projects',
			projects:[
				{
					id: 1,
					name: 'build a hut',
					description: 'nice project'
				},{
					id: 2,
					name:'make a basket',
					description:'pretty project'
				}
			]
		}
	}
//3. create methods
	setActiveView = (view)=>{
		this.setState({activeView: view})
	}
	//fetch() is only get; npm i --save AXIOS; import
	getProjects = () =>{
		Axios.get(urlPrefix+'/projects')
		.then(res=>{
			console.log(res);
			this.setState({projects:res.data})
		})
	}

	addProject = (data) =>{

	}

	deleteProject = (id) =>{

	}

	updateProject = (id, data) =>{

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
										key: project.id
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
							<form>
								<div className="form-group">
									<label htmlFor="name-input">Name</label>
									<input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter project name"/>
								</div>
								<div className="form-group">
									<label htmlFor="name-input">Description</label>
									<input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter project description"/>
								</div>

								<div className="form-group">
									<label htmlFor="name-input">Photo</label>
									<input type="text" className="form-control" name="photo-input" id="photo-input" value="project.jpg"/>
								</div>

								<div className="form-group">
									<label htmlFor="type-input">Type</label>
									<select className="form-control" name="type-input" id="type-input">
									<option value="1">Painting</option>
									<option value="2">Sculpture</option>
									<option value="3">Digital</option>
									</select>
								</div>

								<button type="submit" className="btn btn-primary">Add</button>
							</form>
						</div>
					</View>

					<View viewName="nav" activeView={this.state.activeView} className="color4">
						<div className="header"><i className="fas fa-times"></i></div>
						<div className="main">

						<ul className="menu">
							<li><a onClick={()=>{this.setActiveView('projects')}} className="color1" href="#">Project</a></li>
							<li><a onClick={()=>{this.setActiveView('add-project')}} className="color2" href="#">Add-project</a></li>
						</ul>

						</div>
					</View>

				</View>

			</div>
		)
	}
}

export default App;
