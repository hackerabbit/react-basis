import {Component} from 'react'

class LoginForm extends Component{
    constructor(props) {
        super(props) 
        this.state = {name : '',password : ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        this.setState({[target.name] : target.value})
    }

    handleSubmit(event) {
        console.log('login successfully')
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    用户名:
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                </label>
                <label>
                    密码:
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                </label>
                <input type='submit' value='登录'/>
            </form>
        )
    }
}

export default LoginForm;