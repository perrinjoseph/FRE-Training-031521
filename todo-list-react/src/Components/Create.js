import React, { useEffect, useState } from 'react'
import '../Styles/Create.css'
import IconButton from '@material-ui/core/IconButton'
import Add from '@material-ui/icons/Add'

function Create({tasks}) {
    const [atask,setATasks] = useState([]);
    const [input,setInput]= useState("");
   
    const handelSubmit = (e)=>{
        e.preventDefault();
        if(input){
            fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify({
                    userId: 1,
                    title: `${input}`,
                    completed: false,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            setATasks([...atask,input])
        }
    }

    useEffect(()=>{
        console.log("render please")
    },[atask])

    return (
        <div className="create">
            <header>
                <h2 className="create__header">Create Task</h2> 
                <form onSubmit={handelSubmit}>
                    <input value ={input} className="create__input" type="text" placeholder="Enter a task" onChange={(e)=>setInput(e.target.value)}></input>
                </form>
                <IconButton type="submit" onClick={handelSubmit} style={{background: "black"}}>
                    <Add style={{fill: "white"}}/>
                </IconButton>
            </header>
        </div>
    )
}

export default Create
