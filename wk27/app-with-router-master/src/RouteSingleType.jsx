import React, {Component} from 'react';
import Project from './Project'
import {getSingleType} from './API'

//12. create, import into App.js + link
//server was created with type route, and populate + virtuals

//14. refresh using routeGetType => componentDidMount + shouldComponentUpdate
//15. refreshData only exists in projects, thus need to pull 

class RouteSingleType extends Component {
  constructor(props){
    super(props)

    this.state = {
      type: null
    };
  }

    //refresh method
    routeGetType = (id) =>{
      getSingleType(id).then(res => this.setState({type: res.data}))
    }
  

  componentDidMount(){
    var {id} = this.props;
    //id is passed as a parameter as a prop
    this.routeGetType(id)
  }

  shouldComponentUpdate(nextProps, nextState){

    var {id} = this.props;
    if(id!=nextProps.id){
      this.routeGetType(nextProps.id)
    }

    // console.log(this.props);
    // console.log(nextProps);
    return true;
  }

  //componentDidUpdate approach
  // componentDidUpdate(){
  //   var {id} = this.props;
  //   this.routeGetType(id)
  // }

  render(){
    var {type} = this.state;
    //condition to handle null
    return type
    ?(
      <div className="main">
        <h3>{type.name}</h3>
        {
          //no longer from this.state but this.state.type
          type.projects.map((project) =>{
            var projectProps = {
              ...project,
              key: project.id,
              refreshData: ()=>{this.routeGetType(type.id)},//need to pass as a function, otherwise will execute
            };
            return (<Project {...projectProps} />)
          })
        }
      </div>
    )
    : null;
  }
}

export default RouteSingleType;
