import React, {Component} from 'react';
import Project from './Project'
import {getProjects} from './API'

//5. import Project component
//6. routeGetProjects to load into state, import getProjects from API, mount

class RouteProjects extends Component {
  constructor(props){
    super(props)

    this.state = {
      projects:[],
    };
  }

  routeGetProjects =() =>{
    getProjects().then(res =>{
      this.setState({projects: res.data}) //list of data from the response   
    })
  }

  componentDidMount(){
    console.log('RouteProjects mounted');
    this.routeGetProjects();
  }

  render(){
    return (
          <div className="main">
            <h3>All Projects</h3>
              {
                this.state.projects.map((project) => {

                  var projectProps = {
                    ...project,
                    key: project.id,
                  };
                  return (<Project {...projectProps} />)
                })
              }
          </div>
    );
  }
}

export default RouteProjects;
