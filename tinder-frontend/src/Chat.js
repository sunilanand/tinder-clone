import React from 'react';
import Avator from "@material-ui/core/Avatar";

import "./Chat.css";
import { Link } from 'react-router-dom';

const Chat = ({name, message, profilePic, timestamp}) => {
    return (
        <Link to={`/chats/${name}`}>
            <div className="chat">
                <Avator className="chat__image" alt={name} src={profilePic}>{name}</Avator>
                <div className="chat__details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat__timestamp">{timestamp}</p>
                <p>Test</p>
            </div>
        </Link>
    )
}

export default Chat
