import React from 'react';
import './Header.css';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import logo from '../../Images/gmail-logo.png'
import Search from '@material-ui/icons/SearchOutlined'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { useDispatch, useSelector } from 'react-redux';
import AllActions from '../../Redux/Actions';
import { auth } from '../../Firebase/firebase';

function Header() {
    const dispatch = useDispatch();
    const {email,photoURL,userName} = useSelector((store)=>store.userInformation.user);

    const logout = ()=>{
        auth.signOut()
        .then(()=>{
            dispatch(AllActions.userActions.logoutUser())
        })
    }
    return (
        <header className="header">
            <section className="header__left">
                <IconButton>
                    <Menu className="grayIcon"/>
                </IconButton>
                <img src={logo}/>
            </section>

            <section className="header__middle">
                <IconButton >
                    <Search className="grayIcon"/>
                </IconButton>
                <input placeholder="Search..." className="header__input"></input>
                <IconButton>
                    <ArrowDropDownIcon className="grayIcon"/>
                </IconButton>
            </section>

            <section className="header__right">
                <button onClick={logout} className="sidebar__composeBtn">Logout</button>
                <IconButton>
                    <HelpOutlineIcon className="grayIcon"/>
                </IconButton>

                <IconButton>
                    <SettingsIcon className="grayIcon" />
                </IconButton>

                <IconButton>
                    <AppsIcon className="grayIcon"/>
                </IconButton>
                <Avatar src={photoURL}/>
            </section>
        </header>
    )
}

export default Header
