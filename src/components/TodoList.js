import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    return (
    <ol className = {style.TodoList}>
        {props.data.map(listOfThings => {
            return <li className = {style.listOfThings} 
                        key = {listOfThings.id}
                        onClick= {() => props.remove(listOfThings.id)}>
                        {listOfThings.text}
                    </li>
        })};
    </ol>
)};
export default TodoList;