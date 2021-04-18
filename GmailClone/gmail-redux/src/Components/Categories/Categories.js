import React, { useState } from 'react'
import './Categories.css'
import Category from './Category/Category'
import Inbox from '@material-ui/icons/Inbox';
import Social from '@material-ui/icons/SupervisorAccount';
import Promotions from '@material-ui/icons/LocalOffer';
import {Link, useHistory} from 'react-router-dom'


function Categories() {
    const [clicked,setClicked] = useState("Primary");

    const handelClick=(e)=>{
        setClicked(e)
    }

    const history= useHistory();

    return (
        <div  className="categories">
            <Category selected={clicked==='Primary'?true:false} handelClick={handelClick} Icon={Inbox} title="Primary"/>
            <Category selected={clicked==='Socials'?true:false} handelClick={handelClick} Icon={Social} title="Socials"/>
            <Category selected={clicked==='Promotions'?true:false} handelClick={handelClick} Icon={Promotions} title="Promotions"/>
        </div>
    )
}

export default Categories
