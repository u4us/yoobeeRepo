import React,{Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);

        this.state = {
            updatingContent: false,
            contentInput: props.content,
            updatingPriority: false,
            priorityInput: props.priority,
        }
    };

    handleRemoveTodoClick = (e) =>{
        this.props.removeTodo(this.props.id);
    };

    // content
    handleContentDoubleClick = () =>{
        this.setState(
            {
                updatingContent: true
            }
        );
    }

    handleContentBlur =() =>{
        this.setState(
            {
                updatingContent: false
            }
        );
        this.props.updateTodo(this.props.id, {content: this.state.contentInput});
    }

    handleContentInputChange = (e) =>{
        this.setState(
            {
                contentInput: e.target.value
            }
        );
    }

    // priority
    handlePriorityDoubleClick = () =>{
        this.setState(
            {
                updatingPriority: true
            }
        );
    }

    handlePriorityBlur = () =>{
        this.setState(
            {
                updatingPriority: false
            }
        );
        this.props.updateTodo(this.props.id, {priority: this.state.priorityInput});
    }

    handlePriorityInputChange = (e) =>{
        this.setState(
            {
                priorityInput: e.target.value
            }
        );
    }

    render(){
        return(
            <div className="note">
                <div className="todo-content" onDoubleClick={this.handleContentDoubleClick}>
                    {
                        this.state.updatingContent ? 
                        <input type="text" className="form-control" autoFocus onBlur={this.handleContentBlur} onChange={this.handleContentInputChange} value={this.state.contentInput}/>
                        : this.props.content
                    }
                </div>
                <div className="todo-priority" onDoubleClick={this.handlePriorityDoubleClick}>
                    {
                        this.state.updatingPriority ? 
                        <input type="text" className="form-control" autoFocus onBlur={this.handlePriorityBlur} onChange={this.handlePriorityInputChange} value={this.state.priorityInput}/> 
                        : this.props.priority
                    }
                </div>
                <i className="fas fa-minus-circle" onClick={this.handleRemoveTodoClick}></i>
            </div>
        )
    };
};

export default Todo;