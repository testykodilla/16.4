import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
    return (
    <ol className = {style.TodoList}>
        {props.data.map(listOfThings => {
            return <Todo 
                    key = {listOfThings.id}
                    text = {listOfThings.text}
                    remove = {props.remove}
                    id = {listOfThings.id}
                    />
            }
        )}
    </ol>
)};
export default TodoList;