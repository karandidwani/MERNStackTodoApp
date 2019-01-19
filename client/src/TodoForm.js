import React, {Component} from 'react';

class TodoForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.inputText);
        this.setState({inputText: ''})
    }


    render() {
        return (
            <div>
                <section className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="inputText"
                            value={this.state.inputText}
                            id="todoInput"
                            placeholder="Insert your task here..."
                            onChange={(e) => {
                                this.setState({
                                    [e.target.name]: e.target.value
                                })
                            }}

                            required
                        />
                        <button
                            className='btn'
                            type="submit"
                        >
                           Add todo
                        </button>
                    </form>
                </section>
            </div>
        )
    }
}

export default TodoForm;