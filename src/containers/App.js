import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from './../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from './../components/TodoForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: 
                [{
                    id: uuid.v4(),
                        text: 'Posprzątać'
                    }, {
                    id: uuid.v4(),
                        text: 'Odrobić lekcje'
                    }, {
                    id: uuid.v4(),
                        text: 'Zrobić pranie'
                    }]
        };
        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo = (id) => {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title qty={this.state.data.length} />
                <TodoForm add = {this.addTodo} />
                <TodoList data ={this.state.data} remove = {this.removeTodo}/>
            </div>

        );
    }
}
 
export default App;