import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../Styles/Todolist.css'
import {addTodo, deleteTodo} from '../Actions/todoActions'


function Todolist() {
    const [input,setInput] = useState("");
    const dispatch = useDispatch();
    const state = useSelector(state=>state.todoList)
    const [edited,setEdited] = useState("");


    const handelAdd=(e)=>{
        e.preventDefault();
        if(input && !state.todoList.includes(input)){
            dispatch(addTodo(input))
            setInput("")
        }
    }
    const handelDelete = (e)=>(item)=>{
        e.preventDefault();
        if(item){
            dispatch(deleteTodo(item))
        }
        console.log(state);
    }

    const handelEdit = (e)=>(item)=>{
        e.preventDefault();
        setEdited(e.target.value)
        console.log(edited)
        
    }



    return (
        <div className="todoList">
            <h1>TODOLIST</h1>
            <form>
                <div className="todoList__input">
                    <input onChange={(e)=>setInput(e.target.value)} value ={input} type="text" placeholder="Enter a task"/>
                    <button onClick={handelAdd}>+</button>
                </div>
                <article>
                    {state.todoList.map((el,index)=>(
                        <div key ={index} id={el} className="todoList__task">
                            <h3 onClick={(e)=>handelEdit(e)(el)}>{el}</h3>
                            <button onClick={(e)=>handelDelete(e)(el)}>-</button>
                        </div>
                    ))}
                </article>
            </form>
        </div>
    )
}

export default Todolist
