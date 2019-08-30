import React, {Component} from 'react';
import { Router, Link, navigate } from "@reach/router";

import RouteProjects from './RouteProjects';
import RouteAddProject from './RouteAddProject';
import RouteEditProject from './RouteEditProject';
import RouteSingleType from './RouteSingleType';
import RouteLogin from './RouteLogin';
import RouteNotFound from './RouteNotFound';


import {getTypes, getSingleUser} from './API'


import './App.css';

//route ct. view
//react router
//react reach router

//1. npm install --save @reach/router, import.
//2. RouteProjects + RouteAddProject components, import
//3. wrap routes in <Router> w/path and create nav <Link> to/paths
//4. Connect to database, create API.jsx

//13. import get types, constructor, mount, destructure, map types
//refresh in RouteSingleType

//17. fix localStorage in ComponentDidMount, import getSingUser, resolve promise
//18. fix logout, add handleLogoutClick, navigate
//19. security

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      types: [],
      currentUser: null,
    };
  }

  handleLogoutClick = () => {
    localStorage.removeItem('userId')
    this.setState({currentUser:null})
    navigate('/login')
  }

  //setUser method
  setCurrentUser = (user) =>{
    this.setState({currentUser: user})
  }

  componentDidMount(){
    console.log('single type mounted') //mounts only only on
    getTypes().then(res=>this.setState({types:res.data}));

    //
    var userId = localStorage.getItem('userId')
    if(userId){
      getSingleUser(userId).then(res=> this.setState({currentUser: res.data}))
    }
  }

  render(){
    var {types, currentUser} = this.state;
    return (
      <div className="app">
        <div className="header">
          {
            currentUser
            ?(
              <span>Welcome {currentUser.name}</span>
            ): null
          }
          
          <i className="fas fa-bars"></i>
          <ul className="menu">
            <Link to="/projects">All Projects</Link>
            

            {
              types.map(type=><Link to={'/types/'+type.id}>{type.name}</Link>)
            }

            {
              currentUser
              ?(
                <>
                <Link to="/projects/create">Add Project</Link>
                <li><a onClick={this.handleLogoutClick}>Logout</a></li>
                </>
              )
              :(
                <>
                <Link to="/login">Login</Link>
                <li><a href="">Signup</a></li>
                </>
              )
            }            
          </ul>
        </div>

        <Router>
          <RouteProjects path="/projects"/>
          {currentUser? (<RouteAddProject path="/projects/create"/>): (null)}
          {currentUser? (<RouteEditProject path="/projects/:id/edit"/>): (null)}
          <RouteSingleType path="/types/:id"/>
          <RouteLogin setCurrentUser={this.setCurrentUser} path="/login"/>
          <RouteNotFound default/>
        </Router>
        
      </div>
    );
  }
}

export default App;