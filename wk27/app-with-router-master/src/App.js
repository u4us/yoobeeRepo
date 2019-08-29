import React, {Component} from 'react';
import { Router, Link } from "@reach/router"

import RouteProjects from './RouteProjects'
import RouteAddProject from './RouteAddProject'
import RouteEditProject from './RouteEditProject'

import './App.css';

//route ct. view
//react router
//react reach router

//1. npm install --save @reach/router, import.
//2. RouteProjects + RouteAddProject components, import
//3. wrap routes in <Router> w/path and create nav <Link> to/paths
//4. Connect to database, create API.jsx

class App extends Component {
  render(){
    return (
      <div className="app">

          <div className="header">
            <span>Welcome Peter</span> <i className="fas fa-bars"></i>
            <ul className="menu">
              <li><Link to="projects">All Projects</Link></li>
              <li><Link to="projects/create">Add Project</Link></li>
              <li><a href="">Login</a></li>
              <li><a href="">Signup</a></li>
            </ul>
          </div>

          <Router>
            <RouteProjects path="projects"/>
            <RouteAddProject path="projects/create"/>
            <RouteEditProject path="projects/:id/edit"/>
          </Router>
        
      </div>
    );
  }
}

export default App;