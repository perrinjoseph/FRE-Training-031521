import React from 'react'
import './Mail.css'
import {useHistory} from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AllActions from '../../../../Redux/Actions';


function Mail({mail,body,subject,timestamp}) {

    const dispatch = useDispatch();

    const formattedBody = body.split('').filter((el,index)=> index<110)
    if(formattedBody.length==110)formattedBody.push("...")
    
    const formattedSubject = subject.split('').filter((el,index)=>index<7)
    if(formattedSubject.length==7)formattedSubject.push('...')

    const selectMail = ()=>{
        dispatch(AllActions.userActions.selectMail(mail))
    }

    return (
        <article  className="mail">
            <div className="mail__left">
                <Checkbox/>
                <IconButton>
                    <StarIcon/>
                </IconButton>
                <Link onClick={selectMail} className="linkStyles left" to='/mail'>
                    <span className="mail__sub">{formattedSubject.join('')}</span>
                </Link>
               
            </div> 
            <Link onClick={selectMail} className="linkStyles mail__center" to='/mail'>
                    <span className="mail__subject"> {formattedBody.join('').replace(/(\r\n|\n|\r)/gm,"")}</span>
            </Link>
            <div className="mail__right">
                <span className="timestamp">{timestamp}</span>
            </div>
        </article>
    )
}

export default Mail
