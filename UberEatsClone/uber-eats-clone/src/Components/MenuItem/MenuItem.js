import React, { Component } from 'react'
import './MenuItem.css'

export default class Item extends Component {
    render() {
        return (
            <article className="menuItem">
                <img className="menuItem__img" src={this.props.image}></img>
                <img className="shadow item-shadow" src={this.props.image}></img>
                <p className="menuItems__details">
                    <span className="menuItem__title">{this.props.title}</span>
                    <br></br>
                    <span className="menuItem__price">{this.props.price}</span>
                </p>
                <button className="menuItem__btnToCart">Add to Cart</button>
            </article>
        )
    }
}
