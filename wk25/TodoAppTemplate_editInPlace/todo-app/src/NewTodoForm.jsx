import React,{Component} from 'react';

class NewTodoForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            contentInput: '',
            priorityInput: ''
        };
    }

    // 6. add change events
    // for many inputs, can divide into form component.
    handleContentInput = (e)=>{
        this.setState(
            {
                contentInput: e.target.value
            }
        );
    }

    handlePriorityInput = (e)=>{
        this.setState(
            {
                priorityInput: e.target.value
            }
        );
    }

    handleTodoAddClick = (e)=>{
        e.preventDefault();

        // 10. grab the passed function from the App
        var data = {
            content: this.state.contentInput,
            priority: this.state.priorityInput
        };
        this.props.addTodo(data);
    }

    render(){
        return(

            // 2. same format as App.jsx, import, class, export
            <div className="todo new-todo">
                <form className="todo-body">
                    <div className="form-group">
                        <label htmlFor="content-input">Content</label>
                        <input type="text" className="form-control" id="content-input" onChange={this.handleContentInput}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="priority-input">Priority</label>
                        <input type="text" className="form-control" id="priority-input" onChange={this.handlePriorityInput}/>
                    </div>
            
                    <button type="submit" className="btn btn-primary todo-add" onClick={this.handleTodoAddClick}>Add</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;