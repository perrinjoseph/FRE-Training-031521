import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db} from '../../Firebase/firebase';
import AllActions from '../../Redux/Actions';
import './NewMail.css'
import firebase from 'firebase'
import WarningIcon from '@material-ui/icons/Warning';
import DoneIcon from '@material-ui/icons/Done';


function NewMail() {
    const dispatch = useDispatch();
    const minimize = useSelector(state=>state.mailState.minimize);
    const user = useSelector(state=>state.userInformation.user)

    const [to,setTo] = useState("");
    const [subject,setSubject] = useState("");
    const [body,setBody] = useState("");
    const [popup,setPopup] =useState(false);
    const [popupMessage,setPopupMessage] = useState("")

    const handelSubmit=(e)=>{
        e.preventDefault();
        const users =db.collection('users')
        users.doc(to).get()
        .then((response)=>{
            if(response.exists){
                users.doc(to).update({
                    inbox:firebase.firestore.FieldValue.arrayUnion({
                        body,
                        subject,
                        from:user.email,
                        timestamp:new Date().toUTCString(),
                    })
                })
                dispatch(AllActions.newMailActions.closeMail())
            }
            else{
                console.log("doesnot exist")
                setTimeout(()=>{
                    setPopup(false);
                    setPopupMessage("")
                },2000)
                setPopupMessage("Email does not exist")
                setPopup(true);
            }
        })
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
            <article className={popup?`popup extend ${popupMessage}`:"popup"}>
                {popupMessage==="Email does not exist" && <WarningIcon/>}
                {popupMessage==="Sent" && <DoneIcon/>}
                {popupMessage}
            </article>
        </article>
    )
}

export default NewMail
