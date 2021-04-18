import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AllActions from '../../Redux/Actions';
import './NewMail.css'


function NewMail() {
    const dispatch = useDispatch();
    const minimize = useSelector(state=>state.mailState.minimize);

    const [to,setTo] = useState("");
    const [subject,setSubject] = useState("");
    const [body,setBody] = useState("");

    const handelSubmit=(e)=>{
        e.preventDefault();
        console.log(e)
    }

    return (
        <article className={minimize?"newMail minimizeMail":"newMail"}>
            <header className="newMail__header">
                <ul className="newMail__menu">
                    <li className="newMail__item"><span>New Message</span></li>
                    <li className="newMail__item">
                        <div onClick={()=>dispatch(AllActions.newMailActions.closeMail())} className="close"></div>
                        <div onClick={()=>dispatch(AllActions.newMailActions.minimizeMail())} className="minimize"></div>
                        <div onClick={()=>dispatch(AllActions.newMailActions.minimizeMail())} className="fullScreen"></div>
                    </li>
                </ul>
            </header>
            <form onSubmit={handelSubmit} style={{height:"300px"}}>
                <section className="newMail__to">
                    <input required="true" onChange={(e)=>setTo(e.target.value)} value={to} placeholder="To:" className="newMail__to__input" ></input>
                </section>
                <section className="newMail__subject">
                    <input required="true" onChange={(e)=>setSubject(e.target.value)} value={subject} placeholder="Subject:" className="newMail__to__subject"></input>
                </section>
                <main className="newMail__body">
                    <textarea required="true" onChange={(e)=>setBody(e.target.value)} value ={body}className="newMail__body__input"> </textarea>
                </main>
                <footer className="newMail__send"><button onSubmit={handelSubmit} className="sidebar__composeBtn">Send</button></footer>
            </form>
        </article>
    )
}

export default NewMail
