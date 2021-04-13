import './App.css';
import axios from 'axios';
import React, { Component } from 'react'
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
import MenuItem from './Components/MenuItem/MenuItem';
import axiox from 'axios';
import CartSideBar from './Components/CartSideBar/CartSideBar';
import AllActions from './Actions/'
import {connect} from 'react-redux'


class App extends Component {

  state = {
    selected:"All",
    menuItems:[],
    clickCart: false,
  }

  constructor(...props){  
    super(...props);
    this.state = {
      selected:"All",
      menuItems:[],
      clickCart: false,
    }
    let data = this.getMenuItems();
    // AllActions.menuActions.setMenu()
  }

  clickedCuisine=(selected)=>{
    if(selected)
    this.setState({
      ...this.state,
      selected,
    })
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
    this.props.setMenu([...data])
    
  }

  showCartSideBar=()=>{
    this.setState({
      ...this.state,
      clickCart:!this.state.clickCart
    })
  }

  addItemToCart=(item)=>{
    this.props.addToCart(item)
  }

  deleteItemFromCart = (id)=>{
    this.props.deleteFromCart(id);
  }

  render() {
    return (
      <div>
        <Navigation number={this.props.state.cart.length} showCartSideBar = {this.showCartSideBar}/>
        
        <main className="container">
          <CartSideBar delete={this.deleteItemFromCart} state= {this.props.state}visibile ={this.state.clickCart ===true?true:false}/>
          
          <section className="header"><span className="header__left">Menu</span><span className="header__right"> Category</span></section>

          <section className="container__cuisines">
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='All'?true:false} cuisineTitle="All" cuisine={all}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Burger'?true:false} cuisineTitle="Burger" cuisine={burger}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Soda'?true:false} cuisineTitle="Soda" cuisine={soda}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Pizza'?true:false} cuisineTitle="Pizza" cuisine={pizza}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Dessert'?true:false} cuisineTitle="Dessert" cuisine={dessert}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Coffee'?true:false} cuisineTitle="Coffee" cuisine={coffee}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Indian'?true:false} cuisineTitle="Indian" cuisine={indian}/>  
            <Cuisine clickedCuisine={this.clickedCuisine} check={this.state.selected==='Chinese'?true:false} cuisineTitle="Chinese" cuisine={chinese} />  
          </section>
          
          <section className="header"><span className="header__left">Select</span><span className="header__right"> Order</span></section>

          <section className="container__menuItems">
            {this.props.state.menu.map((item,index)=>(
              <MenuItem addItemToCart = {this.addItemToCart} item={item} key ={index} title={item.title} image={item.image} price={item.price} type={item.type}/>
            )
            )}
          </section>

        </main>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    state
  }
}

const mapDispatchToProps =()=>{
  console.log()
  return{
    setMenu:AllActions.menuActions.setMenu,
    addToCart: AllActions.cartActions.addToCart,
    deleteFromCart: AllActions.cartActions.deteleFromCart,
  }
}

export default connect(mapStateToProps,mapDispatchToProps())(App)
