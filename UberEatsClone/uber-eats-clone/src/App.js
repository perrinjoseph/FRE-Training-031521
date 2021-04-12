import './App.css';
import axios from 'axios';
import React, { Component } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation';
import Cuisine from './Components/CuisineCard/Cuisine';
import burger from './Images/icons/burger.png';
import soda from './Images/icons/soda.png'
import pizza from './Images/icons/pizza.png'
import all from './Images/icons/all.png'
import dessert from './Images/icons/dessert.png'
import coffee from './Images/icons/coffee.png'
import indian from './Images/icons/indian.png'
import chinese from './Images/icons/chinese.png'
import Item from './Components/MenuItem/MenuItem';
import axiox from 'axios';

export default class App extends Component {

  constructor(...props){  
    super(...props);
    this.state = {
      selected:"",
      menuItems:[],
    }
    this.getMenuItems();
  }

  clickedCuisine=(selected)=>{
    if(selected)
    this.setState({
      ...this.state,
      selected,
    })
  }

  componentDidUpdate(){
    console.log(this.state)
  }


  setMenuItems(data){
    this.setState({
      ...this.state,
      menuItems:[...data]
    })
  }

  async getMenuItems(){
    const response = await axios.get("http://localhost:3000/food");
    const data = await response.data
    this.setMenuItems(data)
  }

  render() {
    return (
      <div>
        <Navigation/>
        <main className="container">
          <section className="header"><span className="header__left">Menu</span><span className="header__right"> Category</span></section>
          <section className="container__cuisines">
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='All'?true:false} cuisineTitle="All" cuisine={all}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Burger'?true:false} cuisineTitle="Burger" cuisine={burger}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Soda'?true:false} cuisineTitle="Soda" cuisine={soda}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Pizza'?true:false} cuisineTitle="Pizza" cuisine={pizza}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Dessert'?true:false} cuisineTitle="Dessert" cuisine={dessert}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Coffee'?true:false} cuisineTitle="Coffee" cuisine={coffee}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Indian'?true:false} cuisineTitle="Indian" cuisine={indian}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Chinese'?true:false} cuisineTitle="Chinese" cuisine={chinese}/>  
          </section>
          <section className="header"><span className="header__left">Select</span><span className="header__right"> Order</span></section>

          <section className="container__menuItems">
            {this.state.menuItems.map((item,index)=>(
              <Item title={item.title} image={item.image} price={item.price} type={item.type}/>
            )
            )}
          </section>
        </main>
      </div>
    )
  }
}
