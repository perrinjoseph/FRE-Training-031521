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

function Header() {

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

                <IconButton>
                    <HelpOutlineIcon className="grayIcon"/>
                </IconButton>

                <IconButton>
                    <SettingsIcon className="grayIcon" />
                </IconButton>

                <IconButton>
                    <AppsIcon className="grayIcon"/>
                </IconButton>
                <Avatar/>
            </section>
        </header>
    )
}

export default Header
