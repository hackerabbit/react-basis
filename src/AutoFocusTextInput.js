const { Component } = require("react");

class AutoFoucsTextInput extends Component {
    componentDidMount() {
        console.log(this.textInput);
        this.textInput.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={(input) => { this.textInput = input }} />
            </div>
        )
    }
}


export default AutoFoucsTextInput;