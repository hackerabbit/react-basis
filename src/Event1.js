import { Component } from 'react';
class Event1 extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [1, 2, 3, 4], number: 0, current: 1 }
        // this.handClick = this.handClick.bind(this);
    }

    handClick(event) {
        let number = this.state.number;
        ++number;
        this.setState({
            number: number
        })
    }

    handClick1(item,event) {
        this.setState({
            current : item
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.number}</div>
                <button onClick={this.handClick.bind(this)}>
                    Click
                </button>
                <ul>
                    {this.state.list.map((item) => (
                        <li className={this.state.current === item ? 'current' : ''} onClick={this.handClick1.bind(this, item)} key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Event1;