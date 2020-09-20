import React from 'react';
import './Chats.css';

import Chat from './Chat';

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Sarah" 
                message="Hey! how are you 😊" 
                timestamp="35 minutes ago" 
                profilePic="https://m.media-amazon.com/images/M/MV5BMDg2YTRhZjItYWZhYi00Mzk1LWE0NmQtNjdmNTg0MzcxMzExXkEyXkFqcGdeQXVyMTEwNjgxODYz._V1_.jpg"
            />
            <Chat
                name="Ellen" 
                message="Whats up 💟 ?"
                timestamp="55 minutes ago" 
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Ellen_DeGeneres_2.jpg/220px-Ellen_DeGeneres_2.jpg"
            />
            <Chat
                name="Sana" 
                message="Hey baby!"
                timestamp="59 minutes ago" 
                profilePic=""
            />
        </div>
    )
}

export default Chats
