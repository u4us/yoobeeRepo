import React,{Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            updatingContent: false,
            updatingPriority: false,
            //todoContentInput: '', does not need this, as it has access
            todoContentInput: props.content,
            todoPriorityInput: props.priority,

        }
    }

    // 11. handle hook the passed function from App
    handleTodoRemoveClick = ()=>{
        //grab id from props
        this.props.removeTodo(this.props.id)
    };
    
    // 14. event handlers for editClick
    handleContentClick = ()=>{
        this.setState(
            {
                updatingContent: true,
            }
        );
    }

    handlePriorityClick = () =>{
        this.setState(
            {
                updatingPriority: true,
            }
        );
    }

    // 15. event handlers for editBlur
    
    handleContentBlur = () =>{
        this.setState(
            {
                updatingContent: false,
            }
        );

        // 19. catch passed updateTodo function
        var id = this.props.id;
        var data = {
            content: this.state.todoContentInput
        }
        this.props.updateTodo(id, data);
    }
    handlePriorityBlur = () =>{
        this.setState(
            {
                updatingPriority: false,
            }
        );
        var id = this.props.id;
        var data = {
            priority: this.state.todoPriorityInput
        }
        this.props.updateTodo(id, data);
    }

    // 16. handlers for change
    handleContentInputChange=(e)=>{
        this.setState(
            {
                todoContentInput: e.target.value
            }
        );
    }
    
    handlePriorityInputChange = (e)=>{
        this.setState(
            {
                todoPriorityInput: e.target.value
            }
        );
    }

    render(){
        // console.log(this.props);
        return(
            <div className="todo">
                <div className="todo-body">
                    <i className="far fa-times-circle todo-remove" onClick={this.handleTodoRemoveClick}></i>
                    <div className="todo-content" onDoubleClick={this.handleContentClick}  >

                        {/* 13. modify render for input; if updating return input, else return content */}
                        {/* ternary conditional */}
                        {/* {this.props.content} */}
                        {
                            this.state.updatingContent ? (
                                <input type="text" className="form-control" autoFocus onChange={this.handleContentChange} onBlur={this.handleContentBlur} onChange={this.handleContentInputChange} value={this.state.todoContentInput}/>
                                // 17. value cannot be set to this.props.content, due to readonly of props, initialise in state
                            ):this.props.content
                        }

                    </div>
                    <div className="todo-priority" onDoubleClick={this.handlePriorityClick} >
                        {/* {this.props.priority} */}
                        {
                            this.state.updatingPriority? (
                                <input type="text" className="form-control form-control-sm" autoFocus onBlur={this.handlePriorityBlur} onChange={this.handlePriorityInputChange} value={this.state.todoPriorityInput}/>
                            ): this.props.priority
                        }
                    </div>
                </div>
            </div>
        );
    };
}

export default Todo;
