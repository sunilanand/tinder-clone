import React from 'react';
import { Link, useHistory } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './Header.css';

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {
                backButton? (
                    <IconButton onClick={() => history.replace(backButton)}>
                        <ArrowBackIosIcon fontSize="large" className="header__icon" />
                    </IconButton>
                ):(
                    <IconButton>
                        <PersonIcon fontSize="large" className="header__icon" />
                    </IconButton>
                )
            }
            
            <Link to="/">
                <img 
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-500x281.png" 
                alt="Tinder" 
                className="header__logo"/>
            </Link>
            <Link to="/chats">
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
            </Link>
        </div>
    )
}

export default Header
