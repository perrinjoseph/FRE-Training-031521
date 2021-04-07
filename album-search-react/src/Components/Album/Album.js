import React from 'react'
import './Album.css'


function Album({img,name}) {
    return (
        <article className="album"> 
           <img className = "img"style={{ backgroundImage: `url(${img})`}}></img>
           <span className="album__title">{name}</span>
        </article>
    )
}

export default Album
