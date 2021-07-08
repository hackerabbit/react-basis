import { Component } from 'react'

class Hello extends Component {
    constructor(props) {
        super(props);
        this.timer = null; //普通属性
        this.state = {
            user: 'React',
            display: true,
            date: new Date()
        }
        this.updateDate = this.updateDate.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.updateDate, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    updateDate() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.display ? <h1>Hello , {this.state.user}</h1> : null}
                </div>
                <div>
                    <h1>Hello</h1>
                    <h1>{this.state.date.toString()}</h1>
                </div>
            </div>
        )
    }
}

export default Hello;