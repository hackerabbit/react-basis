import { Component } from "react";

function UserGreeting(props) {
    return <h1>welcome back!</h1>
}

function GuestGreeting(props) {
    return <h1>Plesae sign up!</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    // 使用条件判断来写
    // if(isLoggedIn) {
    //     return <UserGreeting/>
    // }else{
    //     return <GuestGreeting/>
    // }


    // 使用三目运算来重写

    return (
        <div>
            {
                isLoggedIn ? <UserGreeting /> : <GuestGreeting />

            }
        </div>
    )

}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginControl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }


    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }

}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages || [];
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    )
}

const messages = ['React', 'vue', 'jq']


function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends Component{
    constructor(props) {
        super(props);
        this.state = {showWarning:true}
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick() {
        // this.setState(state => ({
        //     showWarning : !state.showWarning
        // }))

        this.setState({
            showWarning : !this.state.showWarning
        })
    }


    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}


const element = () => (
    <div>
        <LoginControl />
        <Mailbox unreadMessages={messages} />
        <Page/>
    </div>
)


export default element;