import React, { Component } from 'react'
import TodoItem from './TodoItem/TodoItem';

export default class Todolist extends Component {

    state = {
        todoList:[
            {id:0,userId:1,title:'buy a book', completed:false},
            {id:1,userId:2,title:'buy a Car', completed:false},
        ],
    };

    render() {
        return (
            <div>
                <h4>Todo List</h4>
                <input type="text" placeholder="Enter a task..."/>
                <ul>
                    {this.state.todoList.map(el=>(
                        <>
                            <TodoItem key= {el.id} todo={el}/>
                        </>
                    ))}
                </ul>
            </div>
        )
    }
}
