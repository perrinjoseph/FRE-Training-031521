import React from 'react'
import './Login.css'
import logo from '../../Images/gmail-logo.png'
import { auth, db, provider } from '../../Firebase/firebase'
import { useDispatch } from 'react-redux'
import AllActions from '../../Redux/Actions'

function Login() {
    const dispatch = useDispatch();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(AllActions.userActions.loginUser({uid:user.uid,email:user.email,photoURL:user.photoURL,userName:user.displayName}))
            const users = db.collection("users");

            users.doc(user.email).get()
            .then((response)=>{
                if(!response.exists){
                    users.doc(user.email).set({
                        uid:user.uid,
                        email:user.email,
                        inbox:[],
                    })
                }
                else{
                   console.log("Welcome ",user.email)
                }
            })
        })
    }
    return (
        <article className="login">
            <img className="login__logo" src={logo}></img>
            <button  onClick ={signIn} className="sidebar__composeBtn">Login</button>
        </article>
    )
}

export default Login
