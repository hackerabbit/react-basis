import {Component} from 'react'

class SimpleForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('The title you submitted was ' + this.input.value)
        console.log(this.input)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    title:
                    <input type='text' defaultValue="something" ref={(input) => this.input = input}/>
                </label>
                <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default SimpleForm;