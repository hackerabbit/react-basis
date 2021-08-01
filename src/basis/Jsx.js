// const name = 'johz Perez'


// function formatName(user) {
//     return user.firstName + ' ' + user.lastNmae;
// }

// function getGreeting(user) {
//     if(user) {
//         return <h1>Hello,{formatName(user)}!</h1>
//     }
//     return <h1>Hello,Stranger.</h1>
// }


// const user = {
//     firstName: 'Harper',
//     lastNmae: 'Perez'
// }

// const element = <h1>{getGreeting()}</h1>

function Welcome(props) {
    return <h1>Hello,{props.name}</h1>
}



function App() {
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    )
}

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div>
            <div className="Comment">
                <UserInfo user={props.author}/>
                <div className="Comment-text">
                    {props.text}
                </div>
                <div className="Comment-date"> 
                    {formatDate(props.date)}
                </div>
            </div>
        </div>
    )
}

function Avatar(props) {
    return (
        <div>
            <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}/>
        </div>
    )
}


function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div>
                {props.user.name}
            </div>
        </div>
    )
} 


const comment = {
    date : new Date(),
    text : 'I hope you enjoy learning React!',
    author : {
        name : 'Hello Kitty',
        avatarUrl : 'http://placekitten.com/g/200/300'
    }
}


const Jsx = () => (
    <div>
        <App/>
        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
        />
    </div>
)

export default Jsx;