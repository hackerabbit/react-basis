import { Component } from "react";

class UserListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        var that = this;
        fetch().then(function (response) {
            response.json().then(function (data) {
                that.setState({
                    users : data
                })
            })
        })
    }

    render() {
        return (
            <UserList users={this.state.users}/>
        )
    }
}

export default UserListContainer;