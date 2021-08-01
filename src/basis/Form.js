import { Component } from "react";

class NameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }

        this.handlechange = this.handlechange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handlechange(event) {
        console.log(event.target.value);
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        alert('提交的名字: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字:
                    <input type="text" value={this.state.value} onChange={this.handlechange} />
                </label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

class Reservation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        console.log(target);

        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name)
        console.log(value);
        this.setState({
            [name] : value
        }) 
    }

    render() {
        return (
            <form>
                <label>
                    参与:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    来宾人数:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        )
    }
}


const Form = () => (
    <div>
        <NameForm />
        <Reservation/>
    </div>
)

export default Form;