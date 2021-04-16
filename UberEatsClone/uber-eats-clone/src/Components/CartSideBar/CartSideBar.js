import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'
import './CartSideBar.css'
import { mapStateToProps,mapDispatchToProps } from  '../../MapStateAndProps/index';
import {connect} from 'react-redux'
import {Redirect ,withRouter} from 'react-router-dom'

class CartSideBar extends Component {


    constructor(...props){
        super(...props);

        this.state={
            redirect: false
        }
    }

    handelclick=(e)=>{
        setTimeout(()=>{
            e.target.className = "cartSideBar__checkoutBtn";
            e.target.disabled = true;
            this.props.saveBill(this.props.state.cart);
            this.props.clearCart();
            const { match, location, history } = this.props;
            const loc = {
                pathname: '/bills',
              }
            history.push(loc);

        },3000)
        console.log(e)
        e.target.innerText = "";
        e.target.className = "cartSideBar__checkoutBtn btnLoading";
    }

    render() {
        let prices;
        let total;
        if(this.props.state.cart.length>0){
            prices = this.props.state.cart.map(el=>el.price).map(el=>el.split("$")[1]);  
            total = prices.map((el)=>+el).reduce((acc,el)=>acc+el)

        }
        return (
            <div className={this.props.visibile?"cartSideBar active":"cartSideBar"}>
                <span className="header__left">Order</span> <span className="header__right menu"> Menu</span>
                {this.props.state.cart.map((item,index)=>(
                    <CartItem delete={this.props.delete} item={item} key={index}/>
                ))}
                {this.props.state.cart.length>0?(<hr className="castSideBar__line"></hr>):""}
                {this.props.state.cart.length>0?null:<p className="cartSideBar__default">Your cart is empty</p>}

                {this.props.state.cart.length>0?( <div className="total-row">
                    <span className="cartItem__title">Order</span>
                    <span className="cartItem__amt">{this.props.state.cart.length>0?new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',}).format(total):""}</span>
                </div>):""}
                {this.props.state.cart.length>0?( <div className="total-row">
                    <span className="cartItem__title">Tax</span>
                    <span className="cartItem__amt">{this.props.state.cart.length>0?new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',}).format(total*0.2):""}</span>
                </div>):""}
                {this.props.state.cart.length>0?(<hr className="castSideBar__line"></hr>):""}
                {this.props.state.cart.length>0?( <div className="total-row">
                    <span className="cartItem__title">Total</span>
                    <span className="cartItem__amt">{this.props.state.cart.length>0?new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',}).format(total+(total*0.2)):""}</span>
                </div>):""}

                <div className="btn-flex">
                {this.props.state.cart.length>0?(<button onClick={(e)=>this.handelclick(e)} className="cartSideBar__checkoutBtn">Checkout</button>):""}
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps())(withRouter((CartSideBar)));