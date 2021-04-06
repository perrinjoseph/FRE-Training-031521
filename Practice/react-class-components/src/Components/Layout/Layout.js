import React, { Component } from 'react'
import Header from '../Header/Header'

export default class Layout extends Component {
    render() {
        const {children} = this.props
        return (
            <>
                <header>
                    <Header/>
                </header>
                <hr></hr>
                {children}
            </>
        )
    }
}
