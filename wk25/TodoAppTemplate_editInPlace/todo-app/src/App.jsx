import React,{Component} from 'react';
// 3. import the Component
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            todos: [
                {
                    id: 1,
                    content: 'Ring Peter',
                    priority: 'Urgent'
                },{
                    id: 2,
                    content: 'Get milk',
                    priority: 'Important'
                },{
                    id: 3,
                    content: 'Water plants',
                    priority: 'Whenever'
                }
            ]
        };
    }

    // 7. functions of the app
    addTodo = (data) =>{
        var newTodo = {
            id: Date.now(),
            ...data
            //can add additional things
        };
        var newList = [newTodo,...this.state.todos];
        this.setState({
            todos: newList
        });
    };

    // 10. console, $r.removeTodo(1)
    removeTodo = (id) =>{
        var todos = this.state.todos;
        //!== ==; part of the list
        var filtered = todos.filter((todo)=>{
            return todo.id !== id;
        });
        this.setState({
            todos: filtered
        });
    };

    // 12. pass updateTodo function to Todo
    //create the function, but have not passed yet
    updateTodo = (id, data) =>{
        //grab list of todos
        var todoList = this.state.todos;
        //find the id
        var index = todoList.findIndex(function(item){
            //return true false if exist
            return item.id == id;
        });
        //console.log(index);
        //spread old content, mix in new data
        var updatedTodo = {...todoList[index],...data};
        //console.log(updatedTodo);
        todoList[index] = updatedTodo;
        this.setState(
            {
                todos: todoList
            }
        );
    };

    render(){
        return(
            <div className="wrap">
                {/* <button onClick={()=>{this.addTodo({content:'testing123',priority:'123'})}}>test</button> */}
                <div className="container">
                    <div className="todos">

                        {/* passing props to the components */}
                        {/* <Todo content="Ring Peter" priority="Urgent"/>
                        <Todo content="Get milk" priority="Important"/> */}
                        
                        {/* 5. map dynamic data instead of static; */}
                        {/* create states for the data, pass to Component */}
                        {
                            this.state.todos.map((todo)=>{
                                // console.log(todo);

                                // alternate: instead of adding it to the tag, add it to a new variable
                                // spread it onto Todo tag
                                var todoProps = {
                                    ...todo,
                                    key: todo.id,
                                    // 11. pass the function to the Todo Component
                                    removeTodo: this.removeTodo,
                                    // 18. pass updateTodo to Todo, handle in Blur in Todo
                                    updateTodo: this.updateTodo
                                };
                                return(
                                    // <Todo content={todo.content} priority={todo.priority}/>
                                    // <Todo key={todo.id} {...todo}/>
                                    <Todo {...todoProps}/>
                                );
                            })
                        }

                        {/* 1. remove to new .jsx file */}
                        {/* 4. NewTodoForm tag */}
                        {/* 8. pass the function around; first-class object; to the NewTodoForm */}
                        <NewTodoForm addTodo={this.addTodo}/>

                    </div>
                </div>
            </div>
        );
    };
}

export default App;

//CRUD app, POST(?) REST
//componentWillUpdate
//componentDidUpdate