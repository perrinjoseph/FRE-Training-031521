import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../../Firebase/firebase';
import AllActions from '../../../Redux/Actions';
import Mail from './Mail/Mail'
import './MailList.css'

function MailList() {

    const inbox = useSelector(store=>store.userInformation.inbox);
    const user = useSelector(store=>store.userInformation.user)
    const dispatch = useDispatch();


    useEffect(()=>{
        const inbox = db.collection("users").where("email","==",user.email)
        .onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                dispatch(AllActions.userActions.setInbox(doc.data().inbox))
            })
        })
    },[])
    return (
        <section className="mailList">
            {inbox.length>0 && inbox.map((mail,index)=>(<Mail mail={mail} body={mail.body} timestamp={mail.timestamp} subject={mail.subject} key={index}/>))}
        </section>
    )
}

export default MailList
