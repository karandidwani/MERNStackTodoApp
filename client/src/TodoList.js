import React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from './api'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };

        this.addTodo = this.addTodo.bind(this);
    }

    componentWillMount() {
        this.loadTodos();
    }

    async loadTodos() {
        let todos = await apiCalls.getTodos();
        this.setState({todos});

    }

    async addTodo(todo) {
        let newTodo = await apiCalls.createTodo(todo);
        this.setState(prevState => ({
            todos: [...prevState.todos, newTodo]
        }))
    }

    async deleteTodo(id) {
        await apiCalls.removeTodo(id);
        let todos = this.state.todos.filter(t => t._id !== id);
        this.setState({todos})
    }

    async toggleTodo(todo) {

        let updatedTodo = await apiCalls.updateTodo(todo);
        var todos = this.state.todos.map(t => (
            t._id === updatedTodo._id ? {
                    ...t,
                    completed: updatedTodo.completed
                }
                : t
        ));
        this.setState({todos});
    }

    render() {
        const todos = this.state.todos.map((t) => (
            <TodoItem
                key={t._id}
                {...t}
                onDelete={this.deleteTodo.bind(this, t._id)}
                onToggle={this.toggleTodo.bind(this, t)}
            />
        ));
        return (
            <div>
                <header>
                    <h1>todo<span>list!</span></h1>
                    <h2>A simple todo list app built with node</h2>
                </header>
                <TodoForm onSubmit={this.addTodo}/>
                <ul className="list">
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;