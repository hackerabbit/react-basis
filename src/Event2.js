import {Component} from 'react'

class Event2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number : 0
        }
    }

    // ES7的属性初始化语法，实际上也是使用了箭头函数
    handleClick = (event) => {
        let number = this.state.number;
        ++number;
        this.setState({
            number : number
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.number}</div>
                <button onClick={this.handleClick}>
                    Click
                </button>
            </div>
        )
    }
}

export default Event2;