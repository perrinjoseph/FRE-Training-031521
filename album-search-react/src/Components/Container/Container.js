import React from 'react'
import Album from '../Album/Album'
import './Container.css'
import {useSelector} from 'react-redux'
import { useEffect, useState } from 'react';



function Container() {
    let data = useSelector(data=>data.albums.albums)

    // const offlineAlbums = localStorage.getItem('albums');
    
    return (
        <div className="container">
            {data.map(el=>(
                <Album key={el.collectionId} name={el.collectionName} img={el.artworkUrl100}/>
            ))}
        </div>
    )
}

export default Container
