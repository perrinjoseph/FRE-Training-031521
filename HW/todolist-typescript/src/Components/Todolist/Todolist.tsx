import React, { useState } from 'react';
import ListItem from '../ListItem/ListItem';
import './Todolist.css';
import {useDispatch,useSelector} from 'react-redux';
import {todo} from '../../Redux/Reducers/todoListReducer'

const Todolist:React.FunctionComponent =function(){
    const [input,setInput] = useState("");

    const store = useSelector(store=>store)
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        if(input){
            console.log(store)
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
            
           </main>
       </main>
    )
}

export default Todolist
