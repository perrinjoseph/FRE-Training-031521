import React, { Component } from 'react'
import TextItem from './Components/TextItem/TextItem'
import './App.css'
import Header from './Components/Header/Header'
export default class App extends Component {
  
  constructor(...props){
    super(...props)
    this.state={
      color:""
    }
  }

  flipState=(e)=>{
    console.log(e)
    this.setState({
      color:e
    })
  }

  componentDidUpdate(){
    console.log(">>>>",this.state)
  }

  render() {
    
    return (
      <div>
        <Header fontColor={this.state.color}/>
        <article className="row">
          <TextItem flipState = {this.flipState} flip = {this.state.color==="blue"?true:false} set ={"blue"} />
          <TextItem flipState = {this.flipState} flip = {this.state.color==="black"?true:false} set ={"black"} />
        </article>
        <article className="row">
          <TextItem flipState = {this.flipState} flip = {this.state.color==="red"?true:false} set ={"red"} />
          <TextItem flipState = {this.flipState} flip = {this.state.color==="green"?true:false} set ={"green"}/>
        </article>
      </div>
    )
  }
}