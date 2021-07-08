import { Component } from 'react';
// import PropTypes from 'prop-types';
import './PostItem.css'
import like from './image/like-default.png'
// function PostItem(props) {

//     const handleClick = () => {
//         props.onVote(props.post.id);
//     }
//     const { post } = props;
//     return (
//         <li className='item'>
//             <div className='title'>{post.title}</div>
//             <div>
//                 创建人：<span>{post.author}</span>
//             </div>
//             <div>
//                 创建时间：<span>{post.date}</span>
//             </div>
//             <div className='like'>
//                 <span><img src={like} onClick={handleClick} alt='点赞'/></span>
//                 <span>{post.vote}</span>
//             </div>
//         </li>
//     )
// }

class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            post: props.post
        }
        this.handleVote = this.handleVote.bind(this)
        this.handleEditPost = this.handleEditPost.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps.props) {
            this.setState({
                post: nextProps.post
            })
        }
    }

    handleVote() {
        this.props.onVote(this.props.post.id)
    }

    handleEditPost() {
        const editing = this.state.editing;
        if (editing) {
            this.props.onSave({
                ...this.state.post,
                date: this.getFormatDate()
            })
        }
        this.setState({
            editing: !editing
        })
    }

    handleTitleChange(event) {
        const newPost = { ...this.state.post, title: event.target.value }
        this.setState({
            post: newPost
        })
    }

    getFormatDate() {

    }

    render() {
        const { post } = this.state
        return (
            <li className='item'>
                <div className='title'>
                    {this.state.editing ?
                        <form>
                            <textarea value={post.value} onChange={this.handleTitleChange}></textarea>
                        </form> : post.title
                    }
                </div>
                <div>
                    创建人：<span>{post.author}</span>
                </div>
                <div>
                    创建时间：<span>{post.date}</span>
                </div>
                <div className='like'>
                    <span><img src={like} onClick={this.handleVote} alt='点赞' /></span>
                    <span>{post.vote}</span>
                </div>
                <div>
                    <button onClick={this.handleEditPost}>
                        {this.state.editing ? "保存" : "编辑"}
                    </button>
                </div>
            </li>
        )
    }


}

// PostItem.PropTypes = {
//     post : PropTypes.object,
//     onVote : PropTypes.func
// }

export default PostItem;