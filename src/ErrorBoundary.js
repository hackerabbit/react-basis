import {Component} from 'react'
class ErrorBoundary extends Component{
    constructor(props) {
        super(props);
        this.state = {hasError:false}
    }
    componentDidCatch(error,info) {
        console.log(1)
        this.setState({hasError : true})
        console.log(error,info)
    }
    render() {

        if(this.state.hasError) {
            return <h1>Oops,something went wrong.</h1>
        }
        return (<h1>
            {this.props.children}
        </h1>)
    }
}


export default ErrorBoundary;