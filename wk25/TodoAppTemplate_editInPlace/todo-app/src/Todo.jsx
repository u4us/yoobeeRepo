import React,{Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        // console.log(props);

    }

    render(){
        // console.log(this.props);

        return(
            <div className="todo">
                <div className="todo-body">
                    <i className="far fa-times-circle todo-remove"></i>
                    <div className="todo-content">
                        {this.props.content}
                    </div>
                    <div className="todo-priority">
                        {this.props.priority}
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;