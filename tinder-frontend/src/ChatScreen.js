import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import './ChatScreen.css';


const ChatScreen = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: '...',
            message: 'Whats up'
        },
        {
            name: 'Ellen',
            image: '...',
            message: 'Hows it going'
        },
        {
            message: 'Whats up'
        }
    ])

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">You matched with Ellen on 10/10/20</p>
            {
                messages.map((message) => (
                    message.name ? (
                        <div className="chatScreen__message">
                            <Avatar
                                className="chatScreen_image"
                                alt={message.name}
                                src={message.image}
                            >{message.image}</Avatar>
                            <p className="chatScreen__text">{message.message}</p>
                        </div>
                    ):(
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                    )
                ))
            }

            <div>
                <form className="chatScreen__input">
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    type="text" placeholder="Type a message..."/>
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
