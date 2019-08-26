import React from 'react';

class AddForm extends React.Component{ 
    constructor(props){
        super(props);
    
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();

        //12. grab the uploadFile method
        var {uploadFile, addProject, setActiveView} = this.props

        var formData = new FormData(this.form);

        // .then because promise
        uploadFile(formData).then(res=>{
            var fileName = res.data;

            var data = {
                name: formData.get('name-input'),
                description: formData.get('description-input'),
                type_id: formData.get('type-input'),
                photo: fileName,
            };
            addProject(data);
            setActiveView('projects');
            //change setting of axios to form data
        });
    }

	render(){
		return(
            <form onSubmit={this.handleFormSubmit} ref={(el)=>{this.form=el}}>
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
                    {/* 11. type file, remove value */}
                    <input type="file" className="form-control" name="photo-input" id="photo-input"/>
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
		)
	}
}

export default AddForm;