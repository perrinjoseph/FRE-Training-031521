import React, {Component, Profiler} from 'react'
import './App.css';
import Todos from './Components/Todos'
import {v4 as uuid} from 'uuid';
import Header from './Components/Layout/Header'
import AddTodo from './Components/AddTodo'

class App extends Component {
  state = {
    todos:[]
  }

  constructor(...props){
    super(...props)
  }

  componentDidMount(){
    const deserializedData = JSON.parse(localStorage.getItem("todos"))
    if(deserializedData)
    this.setTodos(deserializedData)
  }

  componentDidUpdate(){
    this.serializedData = JSON.stringify(this.state.todos)
    localStorage.setItem("todos",this.serializedData)
  }

  markComplete = (e)=>{
    this.setState({
      ...this.state,
      todos:this.state.todos.map(todo=>{
        if(todo.id === e.id){
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  deleteTodo = (e) =>{
    this.setState({
      ...this.state,
      todos:this.state.todos.filter(todo=>todo.id !== e.id)
    })
  }

  setTodos = (deserializedData) =>{
    this.setState({
      ...this.state,
      todos:[...deserializedData]
    })
  }

  addTodo = (e) =>{
    if(e)
    this.setState({
      ...this.state,
      todos:[{id:uuid(),title:e,completed:false,},...this.state.todos]
    })
  }

  getStyle(){
    return{
      textAlign:"center"
    }
  }
  
  render(){
    //BEM 
    return (
      <div style={this.getStyle()} className="app">
        <Header/>
        <AddTodo addTodo = {this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default App;
