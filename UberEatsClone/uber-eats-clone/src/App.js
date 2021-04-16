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
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { mapStateToProps,mapDispatchToProps } from  './MapStateAndProps/index'
import Bills from './Components/Bills/Bills';


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
    this.getMenuItems("All");
  }

  clickedCuisine=(selected)=>{
    if(selected)
    this.setState({
      ...this.state,
      selected,
    })
    this.getMenuItems(selected)
  }
  //this code can be made more efficient but for understanding purpose I will use this.
  async getMenuItems(search){
    console.log(search)
    if(search==="All"){
      const response = await axios.get("http://localhost:3000/food");
      const data = await response.data
      this.props.setMenu([...data])
    }
    else if(search ==="Burger"){
      const response = await axios.get("http://localhost:3000/food");
      const data = await response.data
      this.props.setMenu(data.filter(item=>item.type==="burger"))
    }    
    else if(search ==="Soda"){
      const response = await axios.get("http://localhost:3000/food");
      const data = await response.data
      this.props.setMenu(data.filter(item=>item.type==="soda"))
    }    
    else if(search ==="Pizza"){
      const response = await axios.get("http://localhost:3000/food");
      const data = await response.data
      this.props.setMenu(data.filter(item=>item.type==="pizza"))
    }    
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
      <Router>
        
         <div>
        <Navigation number={this.props.state.cart.length} showCartSideBar = {this.showCartSideBar}/>
        <CartSideBar delete={this.deleteItemFromCart} state= {this.props.state} visibile ={this.state.clickCart ===true?true:false}/>
        <Switch>
          <Route exact path="/">
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
          </Route>
          <Route path="/bills">
            <main className="container">
              <Bills/>
            </main>
          </Route>

          <Route path="/contact">
            <main className="container">
                  <h1>Contact</h1>
            </main>
          </Route>
        </Switch>
        
      </div>
      </Router>
     
    )
  }
}



export default connect(mapStateToProps,mapDispatchToProps())(App)
