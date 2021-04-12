import React, { Component } from 'react'
import './Navigation.css'
import logo from '../../Images/logo.png'
import Home from '@material-ui/icons/HomeOutlined'
import Receipt from '@material-ui/icons/ReceiptOutlined'
import Search from '@material-ui/icons/SearchOutlined'
import Message from '@material-ui/icons/MessageOutlined'
import IconButton from '@material-ui/core/IconButton'


export default class Navigation extends Component {
    render() {
        return (
            <nav className="navigation">
                <section className="navigation__logo">
                    <img className="logo" src={logo}></img>
                    <img className="shadow" src={logo}></img>
                    <section className="navigation__input">
                        <h1 className="ubereats"><span className="uber">UBER </span><span className="eats">EATS</span></h1>
                        <div className="navigation__search">
                            <Search style={{color:"#8B8B8B"}}/>
                            <input className="search" type="text" placeholder="Search..."></input>
                        </div>
                    </section>
                </section>

                <section className="navigation__options">
                    <ul className="navigation__menu">
                        <li className="navigation__item">
                            <Home style={{color:"#8B8B8B"}}/>
                            <span className="item">Home</span>
                        </li>
                        <li className="navigation__item">
                            <Receipt style={{color:"#8B8B8B"}}/>
                            <span className="item">Bills</span>
                        </li>
                        <li className="navigation__item">
                            <Message style={{color:"#8B8B8B"}}/>
                            <span className="item">Contact</span>
                        </li>
                    </ul>
                </section>
            </nav>
        )
    }
}
