import React from 'react'
import Layout from './Components/Layout/Layout'
import TodoList from './Components/TodoList/TodoList'

import './App.css';

class App extends React.Component{
  render(){
    return (
      <Layout>
        <TodoList></TodoList>
      </Layout>
    )
  }
}

export default App