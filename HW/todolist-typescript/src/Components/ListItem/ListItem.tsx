import React, { useState } from 'react'
import './ListItem.css'
import AllAction from '../../Redux/Actions/allActions'
import { useDispatch } from 'react-redux'
import AllActions from '../../Redux/Actions/allActions'

interface listItemProps {
    todo:todo
}

type todo={
    title:string;
    complete:boolean;
    edit:boolean;
}

type color ={
    color:"red" | "green" | "yellow"
}



const ListItem:React.FC <listItemProps>= function({todo}){
    const {title,complete,edit} = todo;
    const [newTitle,setNewTitle] = useState("");
    const dispatch = useDispatch();
    const [clicked,setClicked] = useState(false);

    const handelChange = (e:React.ChangeEvent):void=>{
        dispatch(AllActions.todoListActions.markComplete(todo))
    }
    
    const handelClick = <T extends unknown>(e:T):void=>{
        dispatch(AllActions.todoListActions.deleteTodo(todo));
    }

    const enableEdit = ():void=>{
        dispatch(AllActions.todoListActions.toggleTodo(todo))
        if(newTitle){
            dispatch(AllActions.todoListActions.editTodo(todo,newTitle))
            setNewTitle("");
        }
    }

    return (
        <article className="listItem">
            <input onChange={handelChange} type="checkbox" checked={complete}></input>
            <h1 className={complete?"completed":""}>{title}</h1>
            <input hidden={!edit}  value={newTitle}  onChange={(e)=>setNewTitle(e.target.value)}></input>
            <button onClick={handelClick}>DELETE</button>
            <button onClick={enableEdit}>{edit?"Submit":"Edit"}</button>
        </article>
    )
}

export default ListItem
