import React from 'react';
import style from './Title.css';

const Title = props => (
    <div className = {style.TodoApp}>
        <h2>Rzeczy do zrobienia</h2>
        <p>{`Ilość rzeczy do zrobienia wynosi: ${props.qty}`}</p>
    </div>
);

export default Title;
