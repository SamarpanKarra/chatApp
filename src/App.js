
import { ChatEngine} from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height='100vh'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            projectID='b4105ca5-8dc9-4986-a8c3-2c8bf340ecef'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}
export default App;