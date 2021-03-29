import React from 'react'
import '../Styles/Header.css'

function Header() {
    return (
        <div className="header">
           <nav className="header__nav">
                <div className="header__nav__left">
                    <h1>Swift Note</h1>
                </div>
                <div className="header__nav__right">
                    <ul>
                        <li>Tutorial</li>
                        <li>About</li>
                        <li>Sign In</li>
                    </ul>
                </div>
           </nav>
        </div>
    )
}

export default Header
