import { ChatEngine } from 'react-chat-engine';

import ChatFeed from '../src/components/ChatFeed'

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID ="312341ee-aabb-4151-97b9-573242da8239"
            userName="Giovanni"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    );
}

export default App;