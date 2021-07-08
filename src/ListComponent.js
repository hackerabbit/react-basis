import {Component} from 'react'

class ListComponent extends Component{
    render() {
        return [
            <li key='A'>First item</li>,
            <li key='B'>Second item</li>,
            <li key='C'>Third item</li>
        ]
    }
}

export default ListComponent;