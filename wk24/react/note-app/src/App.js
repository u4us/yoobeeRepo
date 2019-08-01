import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

//as a function or a class
//import React Component, and extends Component
//constructor + super properties
//reactDom inspector

//data is divided into properties & states
//any data outside app.js is a property, state is in app.js

//store data in the state, and pull data from state 
//for button

class App extends Component{
	constructor(props){
		super(props);

		//use setters
		this.state = {
			friends: [],
			color: 'green',
			notes: [
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
			],
			noteInputValue: ''
		}

		// this.notes = [
		// 	{
		// 		id: 1,
		// 		text: 'Watch Youtube'
		// 	}
		// ];
	}

	// handleNoteInputChange(e) into an arrow function to reserve the context instead of bind
	// commonly used 
	// this.handleNoteInputChange = this.handleNoteInputChange.bind(this);
	handleNoteInputChange = (e) => {
		//define 'this' context
		// console.log(this)

		// Incorrect: this.state.noteInputValue = e.target.value;
		// states should not be changed, only initialised

		this.setState({
			noteInputValue : e.target.value
		});
	}

	handleAddNoteClick = (e) => {
		e.preventDefault();

		// var newNotes = this.state.notes;

		// newNotes.push({
		// 	//id based on Epoch timestamp
		// 	id: Date.now(),
		// 	text: this.state.noteInputValue
		// });

		//alternate way: 
		var note = {
			id: Date.now(),
			text: this.state.noteInputValue
		}

		// '...' spread operator, copy and dump the note content
		var newNotes = [...this.state.notes, note];
		// var newNotes = [note,...this.state.notes];

		this.setState({
			notes: newNotes,
			noteInputValue: ''
		});
	}

	removeNote = (noteId) => {
		var notes = this.state.notes;

		// remove the selected note: boolean
		var filteredNotes = notes.filter(function(item){
			return item.id !== noteId
		});
		this.setState({
			notes: filteredNotes
		});

	};

	render(){
		// console.log(this) refers to the App
		return (
			<div className="wrap">
				<div className="container">
					<div className="notes">
						{
							// {} for js, () for html, similar to jstl

							// need to define this; use arrow function
							// this.notes.map((note) => {
							// this.state.notes.map(function(note){
							this.state.notes.map((note) => {
								// console.log(this)
								return (
									<div className="note" key={note.id}>
										<div className="note-body">

											{/* alternate way: instead of using a handler, create a function */}
											<i className="far fa-times-circle note-remove" onClick={(e)=>{this.removeNote(note.id)}}></i>
											<div className="note-text">
												{
													note.text
												}
											</div>
										</div>
									</div>
								);
							// },this)
							})
						}

						<div className="note new-note">
							<form className="note-body">
								<div className="form-group">
									{/* label for => htmlFor */}
									<label htmlFor="note-input">New note</label>

									{/* react syntheticEvent wraps around DOM event, similar to jQuery */}
									{/* 'this' inside a function is not defined by default */}
									{/* function(e){console.log(this)} */}
									{/* 'this' refers to the App, not the input */}
									<input type="text" className="form-control" id="note-input" value={this.state.noteInputValue} onChange={this.handleNoteInputChange}/>
								</div>

								{/* onClick of button || onSubmit of form */}
								{/* 'this' refers to the App, not the button */}
								<button id="add-note" type="submit" className="btn btn-primary" onClick={this.handleAddNoteClick}>Add</button>
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
