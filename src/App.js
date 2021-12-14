
import { ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height='100vh'
            userName='ishi'
            userSecret='ArtFlixchat1'
            projectID='b4105ca5-8dc9-4986-a8c3-2c8bf340ecef'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}
export default App;