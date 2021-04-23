import React, { useState } from 'react';
import ListItem from '../ListItem/ListItem';
import './Todolist.css';
import {useDispatch,useSelector} from 'react-redux';
import {todo} from '../../Redux/Reducers/todoListReducer';
import {StateType} from '../../Redux/Store/store'
import AllActions from '../../Redux/Actions/allActions';
import todoListActions from '../../Redux/Actions/todolistActions';
import { title } from 'process';

const Todolist:React.FunctionComponent =function(){
    const [input,setInput]:[string,Function] = useState("");
    const dispatch = useDispatch();
    const todos= useSelector((store:StateType)=>store.todos.todos)
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        if(input){
            dispatch(AllActions.todoListActions.addTodo({title:input,complete:false,edit:false}))
            setInput("");
        }
    }

    return (
       <main className="todolist">
           <header className="todolist__header">
                <form onSubmit={handleSubmit}>
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter task.."></input>
                    <button onSubmit={handleSubmit}>Create task</button>
                </form>
           </header>
           <main className="todolist__content">
                {todos.map((todo,index)=>(
                    <ListItem key={index} todo={{title:todo.title,complete:todo.complete,edit:todo.edit}}/>
                    )
                )}
           </main>
       </main>
    )
}

export default Todolist
