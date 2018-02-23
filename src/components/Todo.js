import React from 'react';
import style from './TodoList.css';

const Todo = (props) => {
    return <li className = {style.props} 
    onClick= {() => props.remove(props.id)}>
    {props.text}
</li>
}

export default Todo;