import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from './../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: 
                [{
                    id: 1,
                        text: 'Posprzątać'
                    }, {
                    id: 2,
                        text: 'Odrobić lekcje'
                    }, {
                    id: 3,
                        text: 'Zrobić pranie'
                    }]
        };
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
                <TodoList data ={this.state.data} remove = {this.removeTodo}/>
            </div>

        );
    }
}

export default App;