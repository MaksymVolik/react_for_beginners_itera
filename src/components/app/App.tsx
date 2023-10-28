import './App.css';
import { User } from '../user/User';

const App = () => {
    return (
        <User
            name="Maksym"
            surname="Volik"
            age={47}
            male="male"
        />
    );
}

export default App;
