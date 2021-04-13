import { Snackbar } from '@material-ui/core'
import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'
import './CartSideBar.css'

export default class CartSideBar extends Component {
    render() {
        return (
            <div className={this.props.visibile?"cartSideBar active":"cartSideBar"}>
                <span className="header__left">Order</span> <span className="header__right menu"> Menu</span>
                {this.props.state.cart.map((item,index)=>(
                    <CartItem delete={this.props.delete} item={item} key={index}/>
                ))}
            </div>
        )
    }
}
