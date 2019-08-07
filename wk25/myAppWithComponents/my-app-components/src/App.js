import React from 'react';
import NewTodo from './NewTodo'
import Todo from './Todo'
import './App.css';

class App extends React.Component{
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
    };

    addTodo = (data)=>{
        var newTodo = {
            id: Date.now(),
            ...data
        };
        var newList = [...this.state.todos,newTodo];
        this.setState(
            {
                todos: newList
            }
        );
    }

    removeTodo = (id)=>{
        var todos = this.state.todos;
        var filtered = todos.filter((bob)=>{
            return bob.id !== id
        });
        this.setState(
            {
                todos: filtered
            }
        );
    }

    updateTodo = (id, data)=>{
        var todoList = this.state.todos;
        var index = todoList.findIndex(function(item){
            return item.id === id;
        });
        todoList[index] = {...todoList[index],...data}
        this.setState(
            {
                todos: todoList
            }
        );
    }

    render(){
        return(
            <div className="container">
                <header>
                    <div className="title">
                        Daily Todo List
                    </div>
                </header>
                <section>
                    <div className="notes">
                        <NewTodo addTodo={this.addTodo}/>

                        {
                            this.state.todos.map((todo)=>{
                                var todoProps = {
                                    ...todo,
                                    key: todo.id,
                                    removeTodo: this.removeTodo,
                                    updateTodo: this.updateTodo,
                                }
                                return(
                                    <Todo {...todoProps}/>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        );
    };
};

export default App;
