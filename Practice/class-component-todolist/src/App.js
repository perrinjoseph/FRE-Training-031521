import React, {Component} from 'react'
import './App.css';
import Todos from './Components/Todos'
import Header from './Components/Layout/Header'
import AddTodo from './Components/AddTodo'
import {connect} from 'react-redux'
import {addTodo,deleteTodo,markCompleteAction,setTodos} from './Actions/'


class App extends Component {
  //BEM 
  componentDidMount(){
    const deserializedData = JSON.parse(localStorage.getItem("todos"))
    if(deserializedData)
    this.props.setTodos(deserializedData)
  }

  componentDidUpdate(){
    this.serializedData = JSON.stringify(this.props.todosRedux.todos)
    localStorage.setItem("todos",this.serializedData)
  }

  markComplete = (e)=>{
    this.props.markCompleteAction(e.id);
  }

  deleteTodo = (e) =>{
    if(e)
    this.props.deleteTodo(e.id)
  }

  setTodos = (deserializedData) =>{
    this.setState({
      ...this.state,
      todos:[...deserializedData]
    })
  }

  addTodo = (e) =>{
    if(e)
    this.props.addTodo(e);
  }

  getStyle(){
    return{
      textAlign:"center"
    }
  }
  
  render(){
    return (
      <div style={this.getStyle()} className="app">
        <Header/>
        <AddTodo addTodo = {this.addTodo}/>
        <Todos todos={this.props.todosRedux} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    todosRedux:state.todos
  }
}

const maDispatchToProps = ()=>{
  return{
    addTodo,
    deleteTodo,
    markCompleteAction,
    setTodos,
  }
}

export default connect(mapStateToProps,maDispatchToProps())(App);
