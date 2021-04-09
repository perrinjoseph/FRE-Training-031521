import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <h3>Logo</h3>
                <ul className="nav__links">
                    <li>About</li>
                    <li>Shop</li>
                </ul>
            </nav>
        )
    }
}
