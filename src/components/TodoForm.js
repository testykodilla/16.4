import React from 'react';
import style from '../containers/App.css'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(zmiana) {
        this.setState({text: zmiana.target.value});
    };

    handleSubmit(zmiana) {
        zmiana.preventDefault();
        this.setState({text: ''});
        this.props.add(this.state.text);
    };

    render() {
        return (
            <form onSubmit={(zmiana) => this.handleSubmit(zmiana)} className={style.TodoApp}>
                <label className = {style.TodoApp}>
                    Do zrobienia
                    <input 
                        placeholder = {'Do zrobienia'}
                        type="text" 
                        value={this.state.text}
                        onChange={this.handleChange}/>
                </label>
                <input type = "submit" value = "Submit" />
            </form>
        )
    }
}


export default TodoForm;