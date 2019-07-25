import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

//as a function or a class
//import React Component, and extends Component
//constructor + super properties
//reactDom inspector

class App extends Component{
	constructor(props){
		super(props);
		this.notes = [
			{
				id: 1,
				text: 'Watch Youtube'
			},
			{
				id: 2,
				text: 'Cook Dinner'
			},
			{
				id: 3,
				text: 'Learn React'
			}
		];
	}
	render(){
		return (
			<div className="wrap">
				<div className="container">
					<div className="notes">
						{
							//{} for js, () for html, similar to jstl
							this.notes.map(function(note){
								return (
									<div className="note" key={note.id}>
										<div className="note-body">
											<i className="far fa-times-circle note-remove"></i>
											<div className="note-text">
												{
													note.text
												}
											</div>
										</div>
									</div>
								);
							})
						}

						<div className="note new-note">
							<form className="note-body">
								<div className="form-group">
									<label for="note-input">New note</label>
									<input type="text" className="form-control" id="note-input"/>
								</div>
						
								<button type="submit" className="btn btn-primary">Add</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}  
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
          
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
