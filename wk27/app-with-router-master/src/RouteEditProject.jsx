import React, {Component} from 'react';
import { navigate } from "@reach/router"
import {getSingleProject, updateProjects} from './API'

//8. routeEditProject, create getsingle api route, route method
//9: updateProjects api

class RouteEditProject extends Component {
  constructor(props){
    super(props)

    this.state = {
      projects: {},
    };
  }

  //### can be directly mounted, drawbacks
  // routeGetSingleProject =(id) =>{
  //   getSingleProject(id).then(res =>{
  //     this.setState({projects: res.data}) //list of data from the response   
  //   })
  // }

  componentDidMount(){
    var {id} = this.props;
    //###
    // this.routeGetSingleProject(id);
    getSingleProject(id).then(res =>{
      this.setState({projects: res.data}) //list of data from the response   
    })
  }

  handleFormSubmit = (e) => {
		e.preventDefault();

		var formData = new FormData(this.form);

		var data = {
			name:formData.get('name-input'),
			description:formData.get('description-input'),
			type_id:formData.get('type-input')
    }

    var {id} = this.props;
    updateProjects(id,data).then(res=>{
      navigate('/projects')
    })
	}

  render(){
    //change from props to state
    var {name,description} = this.state.projects

    return (
          <div className="main">
            <h3>Edit project</h3>
              <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                <div className="form-group">
                  <label htmlFor="name-input">Name</label>
                  <input type="text" className="form-control" name="name-input" id="name-input" defaultValue={name} />
                </div>
                <div className="form-group">
                  <label htmlFor="name-input">Description</label>
                  <input type="text" className="form-control" name="description-input" id="description-input" defaultValue={description}/>
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

                <button type="submit" className="btn btn-primary">Update</button>
              </form>
          </div>
    );
  }
}

export default RouteEditProject;
