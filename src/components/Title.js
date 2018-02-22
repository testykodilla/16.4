import React from 'react';
import style from './Title.css';

let ilosc = 0;

class Title extends React.Component {

    render () {
        return (
            <div className = {style.titleStyle}>
                <h2>`Rzeczy do zrobienia`</h2>
                <p>`Ilość rzeczy do zrobienia wynosi:  ${ilosc}</p>
            </div>
        )
    }
}

export default Title;