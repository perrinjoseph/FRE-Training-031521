import React, { Component } from 'react'
import './Cuisine.css'


export default class Cuisine extends Component {

    getStyles(){
        return{
            backgroundColor: "#FFDA6C",
            transition: "200ms ease-in-out",
            color: "black",
            transform: "scale(1.05)",
            boxShadow: "8px 8px 40px rgba(255,218,108,0.4)",
        }
    }

    getImgStyles(){
        return{
            border: "none"
        }
    }

    render() {
        return (
            <article style={this.props.check?this.getStyles():{}} className="cuisine" onClick={this.props.clickedCuisine.bind(this,this.props.cuisineTitle)}>                
                <img style={this.props.check?this.getImgStyles():{}} src={this.props.cuisine} className="cuisine__img"/>
                <span className="cuisine__title">{this.props.cuisineTitle}</span>
            </article>
        )
    }
}