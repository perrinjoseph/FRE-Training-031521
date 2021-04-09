import React, { Component } from 'react'
import TextItem from './Components/TextItem/TextItem'
import './App.css'
import Header from './Components/Header/Header'
export default class App extends Component {
  
  constructor(...props){
    super(...props)
    this.state={
      check:false
    }
  }

flipState=()=>{
  this.setState({
    check:true
  })
}
  render() {
    
    return (
      <div>
        <Header/>
        <article className="row">
          <TextItem set ={"blue"} />
          <TextItem set ={"black"} />
        </article>
        <article className="row">
          <TextItem  set ={"red"} />
          <TextItem set ={"green"}/>
        </article>
      </div>
    )
  }
}
