import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropType from 'prop-types'

class Todos extends Component {

    componentDidUpdate(){
    }

    render() {
        return this.props.todos.todos.length>0?this.props.todos.todos.map(todo=>(
            <TodoItem  markComplete = {this.props.markComplete} key={todo.id} todo={todo} deleteTodo={this.props.deleteTodo}/>
        )):(<h4>Please Add todos</h4>)
    }
}

//PROP TYPES
Todos.PropType = {
    todos:PropType.array.isRequired
}

export default Todos;