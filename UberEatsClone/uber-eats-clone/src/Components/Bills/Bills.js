import React, { Component } from 'react'
import { mapStateToProps,mapDispatchToProps } from  '../../MapStateAndProps/index'
import {connect} from 'react-redux'
import Bill from '../Bill/Bill'
import './Bills.css'

class Bills extends Component {
    render() {
        return (
            <div className="bills">
                <section className="bills__header">
                    <span className="header__left">Order </span> <span className="header__right menu">Details</span>
                </section>
                <main className="bills__content">
                    {this.props.state.bills.map(bill=>(<Bill bill={bill}/>))}
                </main>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(Bills)