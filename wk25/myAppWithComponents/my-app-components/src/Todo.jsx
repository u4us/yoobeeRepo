import React,{Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
    };

    handleRemoveTodoClick = (e) =>{
        this.props.removeTodo(this.props.id);
    };

    render(){
        return(
            <div className="note">
                <div className="todo-content">
                    {
                        this.props.content
                    }
                </div>
                <div className="todo-priority">
                    {
                        this.props.priority
                    }
                </div>
                <i className="fas fa-minus-circle" onClick={this.handleRemoveTodoClick}></i>
            </div>
        )
    };
};

export default Todo;