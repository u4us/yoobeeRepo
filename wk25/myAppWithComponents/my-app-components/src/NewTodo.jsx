import React,{Component} from 'react';

class NewTodo extends Component{
    constructor(props){
        super(props);
        
        this.state ={
            contentInput: '',
            priorityInput: ''
        }
    };

    handleContentInput = (e)=>{
        this.setState(
            {
                contentInput: e.target.value
            }
        );
    };

    handlePriorityInput = (e)=>{
        this.setState(
            {
                priorityInput: e.target.value
            }
        );
    };

    handleAddTodoClick = (e)=>{
        var data = {
            content: this.state.contentInput,
            priority: this.state.priorityInput
        }
        this.props.addTodo(data)
    };

    render(){
        return(
        <div className="note new-note">
            <div className="form-group">
                <label htmlFor="content-input">Content</label>
                <input type="text" className="form-control" id="content-input" placeholder="Add note" onChange={this.handleContentInput}/>
            </div>
            <div className="form-group">
                <label htmlFor="priority-input">Priority</label>
                <input type="text" className="form-control" id="priority-input" placeholder="Add note" onChange={this.handlePriorityInput}/>
            </div>
            <i className="fas fa-plus-square" onClick={this.handleAddTodoClick}></i>
        </div>
        )
    };
};

export default NewTodo;