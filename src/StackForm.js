import { Component } from 'react'

class StackForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'mobx' , react:false,redux : false,mobx : false}
        this.handleChange = this.handleChange.bind(this)
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {
        this.setState({
            value : event.target.value
        })
    }

    handleChange1(event) {
        this.setState({
            [event.target.name] : event.target.checked
        })
    }



    handleSubmit(event) {
        alert('You Picked' + this.state.value)
        event.preventDefault();
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Pick on library:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option  value="react">React</option>
                        <option value="redex">Redux</option>
                        <option  value="mobx">Mobx</option>
                    </select>
                </label>

                <label>React
                    <input type='checkbox' name='react' value='react' checked={this.state.react} onChange={this.handleChange1}/>
                </label>
                <label>Redux
                    <input type='checkbox' name='redux' value='redux' checked={this.state.redux} onChange={this.handleChange1}/>
                </label>
                <label>Mobx
                    <input type='checkbox' name='mobx' value='mobx' checked={this.state.mobx} onChange={this.handleChange1}/>
                </label>
                <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default StackForm;