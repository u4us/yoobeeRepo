import React from 'react';

//  2.  add address of the photo, add server entry

var serverUrl = 'http://10.2.24.43:4000/';

class Project extends React.Component{ 
    constructor(props){
        super(props);
    }

    handleTrashClick = () =>{
        var {deleteProject, id} = this.props;
        deleteProject(id);
    }

    handleEditClick = () =>{
        var {setActiveView, setProjectToUpdate, id} = this.props;
        setProjectToUpdate(id);
        setActiveView('edit-project');

    }

	render(){
        //5. photo prop
        var {name, description, photo} = this.props;

		return(
            <div className="card project">
            <img className="card-img-top" src={serverUrl+photo} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p>
                    <i className="fas fa-heart"></i>
                    <i onClick={this.handleEditClick}className="fas fa-edit"></i>
                    <i onClick={this.handleTrashClick} className="fas fa-trash"></i>
                </p>
            
            </div>
            </div>
            
		)
	}
}

export default Project;