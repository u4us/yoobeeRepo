import React, {Component} from 'react';

class LoginForm extends Component {

	constructor(props){
		super(props);
		this.state ={
			message:''
		}
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		var formData = new FormData(this.form);
		var data = {
			username:formData.get('username-input'),
			password:formData.get('password-input'),
		}
//2. pull passed data, authenticate was passed as a promise
		var {authenticate, setActiveView} = this.props;
		authenticate(data).then(user =>{
			if(user){
				setActiveView('projects')
//7. add to localStorage after authentication
        localStorage.setItem('userId',user.id)
			} else{
				//authentication error, write message to state, display in <p>
				this.setState({message:'Try again'});
			}
		});
	}

  	render(){
    	return (
	    <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>

	        <div className="form-group">
	          <label htmlFor="name-input">Username</label>
	          <input type="text" className="form-control" name="username-input" id="username-input" placeholder="Enter username"/>
	        </div>

	        <div className="form-group">
	          <label htmlFor="name-input">Password</label>
	          <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Enter password"/>
	        </div>


	        <button type="submit" className="btn btn-primary">Login</button>
					<p>{this.state.message}</p>
	    </form>

    	);
  	}
}

export default LoginForm;
