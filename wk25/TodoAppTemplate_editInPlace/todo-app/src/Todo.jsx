import React,{Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        // console.log(props);

    }

<<<<<<< HEAD
=======
    // 11. handle hook the passed function from App
    handleTodoRemoveClick = ()=>{
        //grab id from props
        this.props.removeTodo(this.props.id)
    };
    
>>>>>>> 6137f57fb2d4cafc79b289f6668bf7ffde9b8351
    render(){
        // console.log(this.props);

        return(
            <div className="todo">
                <div className="todo-body">
                    <i className="far fa-times-circle todo-remove" onClick={this.handleTodoRemoveClick}></i>
                    <div className="todo-content">
                        {this.props.content}
                    </div>
                    <div className="todo-priority">
                        {this.props.priority}
                    </div>
                </div>
            </div>
        );
    };
}

export default Todo;