import Jsx from './Jsx';
import Clock from './Clock';
import Toggle from './Toggle';
import Render from './Render';
import Form from './Form';
const App = () => (
    <div>
        <Jsx />
        <Clock />
        <Toggle />
        <Render isLoggedIn={true}/>
        <Form/>
    </div>
)

export default App;