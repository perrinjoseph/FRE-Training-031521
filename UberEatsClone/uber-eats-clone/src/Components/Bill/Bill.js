import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'
import {connect} from 'react-redux'
import { mapStateToProps,mapDispatchToProps } from  '../../MapStateAndProps/index'
import BillItem from './BillItem/BillItem';


class Bill extends Component {
    constructor(...props){
        super(...props);
        this.state={
            date:this.props.bill.date.toUTCString(),
            _id: this.props.bill._id,
            orders: this.props.bill.bill
        }
    }

    componentDidMount(){
        console.log(this.state.orders)
    }

    render() {
        return (
            <article>
                <p>Date:{this.state.date}</p>
                <p>Order id:{this.state._id}</p>
                <p>Orders: {this.state.orders.map(order=>
                (
                    <BillItem item={order}/>
                )
                )}</p>

            </article>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(Bill)