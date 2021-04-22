import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <h3>Logo</h3>
                <ul className="nav__links">
                    <Link style={{textDecoration:"none",color:"white"}} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration:"none",color:"white"}} to='/about'>
                        <li>About</li>
                    </Link>
                    <Link style={{textDecoration:"none",color:"white"}} to='/shop'>
                        <li>Shop</li>
                    </Link>
                    
                </ul>
            </nav>
        )
    }
}
