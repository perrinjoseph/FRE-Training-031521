import React, { Component } from 'react'
import './CartItem.css'
import Remove from '@material-ui/icons/Remove'
import IconButton from '@material-ui/core/IconButton'

export default class CartItem extends Component {
    render() {
        return (
            <article className="cartItem">
                <img src={this.props.item.image} className="cartItem__img"></img>
                <img src={this.props.item.image} className="shadow"></img>
                <article className="cartItem__details">
                    <span className="cartItem__title">{this.props.item.title}</span>
                </article>
                <span className="cartItem__productTotal">{this.props.item.price}</span>
                <IconButton onClick={this.props.delete.bind(this,this.props.item.id)}><Remove style={{color:"black"}}/></IconButton>
            </article>
        )
    }
}
