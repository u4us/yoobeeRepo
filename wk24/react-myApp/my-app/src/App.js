import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

// 1. change function to class, inherit from React Component
class App extends Component{

    // 3. add a constructor and data
    constructor(props){
        super(props);

        // 6. convert this.notes to states + change all parameters that use this.notes to this.state.notes
        this.state = {
            notes:[
                {
                    id: 0,
                    content: 'Watch TV'
                },{
                    id: 1,
                    content: 'Do stuff'
                },{
                    id: 2,
                    content: 'Do more stuff'
                }
            ],
            noteInputValue: ''
        }

        // this.notes = [
        //     {
        //         id: 1,
        //         content: 'Watch TV'
        //     }
        // ];
    }

    // 7. add a handleInput method + hook onto input field
    handleNoteInputChange = (e) =>{
        this.setState({
            noteInputValue: e.target.value
        });

        console.log(e.target)
    };

    // 8. add a handleClick method + hook
    handleAddNoteClick = (e) =>{
        var note = {
            id: Date.now(),
            content: this.state.noteInputValue
        };
        var newNotesList = [...this.state.notes, note];
        this.setState({
            notes: newNotesList,
            noteInputValue: ''
        });
    };

    // 9.
    removeNote = (e) =>{
        var notes = this.state.notes;
        var filteredNotes = notes.filter(function(item){
            return item.id !== e
        });
        this.setState({
            notes: filteredNotes
        });
    };

    render(){
        return(
            //2. refactor class => className, close opened tags.
            <div className= "container">
                <header>
                    <div className="title">
                        Todo List
                    </div>
                </header>
                <section>
                    <div className="notes">
                        <div className="note new-note">
                            
                            <input type="text" className="form-control" id="note-input" placeholder="Add note"  value={this.state.noteInputValue} onChange={this.handleNoteInputChange} />
                            <i className="fas fa-plus-square" onClick={this.handleAddNoteClick}></i>
                        </div>

                        {/* 4. remove data and map new data */}
                        {/* 5. add a unique key for each note */}
                        {
                            this.state.notes.map((note)=>{
                                return(
                                    <div className="note" key={note.id}>
                                        <div className="note-text">
                                            {note.content}
                                        </div>
                                        <i className="fas fa-minus-circle" onClick={(e)=>{this.removeNote(note.id)}}></i>
                                    </div>
                                );
                            })
                        }

                        {/* <div className="note">
                            <div className="note-text">
                                Watch TV
                            </div>
                            <i className="fas fa-minus-circle"></i>
                        </div>*/}
                    </div>
                </section>
            </div>
        );
    };
}

export default App;
