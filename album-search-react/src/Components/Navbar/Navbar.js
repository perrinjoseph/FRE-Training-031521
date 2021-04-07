import React, { useEffect, useState } from 'react'
import logo from '../../Images/applelogo.png'
import './Navbar.css'
import {itunesAPI} from '../../Api'
import {useDispatch} from 'react-redux'
import {setAlbum} from '../../Actions/'

function Navbar() {

    const [albums,setAlbums]=useState([]);
    const dispatch = useDispatch();
    const [input,setInput]=useState("");
    
    const handelChange = (e)=>{
        setInput(e.target.value)
        if(input)
        itunesAPI().getAlbums(input).then(data=>setAlbums(data))
    }
    dispatch(setAlbum(albums))
    
    
    return (
        <nav className="navbar">
            <section className="navbar__left">
                <img className="navbar__logo" src={logo} alt="Apple Music"></img>
                <span className="navbar__title" >Music</span>
            </section>
            <input onChange={handelChange} value={input} className="navbar__search" type="text" placeholder="Search..."/>
            <ul className="navbar__menu">
                <li>Features</li>
                <li>Home</li>
            </ul>
        </nav>
    )
}

export default Navbar
