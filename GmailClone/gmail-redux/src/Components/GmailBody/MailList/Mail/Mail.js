import React from 'react'
import './Mail.css'
import {useHistory} from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom';


function Mail() {
    const history = useHistory();
    return (
        <article  className="mail">
            <div className="mail__left">
                <Checkbox/>
                <IconButton>
                    <StarIcon/>
                </IconButton>
                <Link className="linkStyles" to='/mail'>
                    <span>Email from pjarmy</span>
                    <span className="mail__subject"> This is a text message. This is a test message</span>
                </Link>
                  
            </div>
            <div className="mail__right">
                <h1>{new Date().toUTCString()}</h1>
            </div>
           
        </article>
    )
}

export default Mail
