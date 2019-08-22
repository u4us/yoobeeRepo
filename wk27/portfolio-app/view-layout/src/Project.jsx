import React from 'react';

class Project extends React.Component{ 
    constructor(props){
        super(props);
    }

    handleTrashClick = () =>{
        var {deleteProject, id} = this.props;
        deleteProject(id);
    }

    handleEditClick = () =>{
// 18. add setProjectToUpdate
        var {setActiveView, setProjectToUpdate, id} = this.props;
        setProjectToUpdate(id);
        setActiveView('edit-project');

    }

	render(){
        var {name, description} = this.props;

		return(
            <div className="card project">
            <img className="card-img-top" src="project.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p>
                    <i className="fas fa-heart"></i>
                    {/* 13. handleEditClick */}
                    <i onClick={this.handleEditClick}className="fas fa-edit"></i>
                    <i onClick={this.handleTrashClick} className="fas fa-trash"></i>
                </p>
            
            </div>
            </div>
            
		)
	}
}

export default Project;