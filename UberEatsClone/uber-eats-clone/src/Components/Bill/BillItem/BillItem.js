import React, { Component } from 'react'
import "./BillItem.css"

export default class BillItem extends Component {
    render() {
        return (
            <article className="billItem">
                <p>{this.props.item.title}</p>
                <p>{this.props.item.price}</p>
            </article>
        )
    }
}
