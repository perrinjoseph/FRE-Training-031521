import React, { Component, useState } from 'react'
import {Rating} from 'pat-ui'
// import '/Users/emmanuel/.nvm/versions/node/v12.21.0/lib/node_modules/pat-ui/dist/index.css'
import 'pat-ui/dist/index.css'


function Shop() {
    const [rating,setRating] = useState(0);
    return (
        <div>
            <h1>from Pat Ui</h1>
            <Rating ratingtype="progress" barValue={30}/>
            <Rating  defaultRating={4} barValue={30} getRating={(rating)=>setRating(rating)}/>
            <br></br>
            <span>rating: {rating}</span>
            <Rating ratingtype="thumb"/>
            <br></br>
            <Rating ratingtype={'progress'} barcolor={{left:"pink",right:"orange"}} barValue={70}/>
        </div>
    )
}

export default Shop

