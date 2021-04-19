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

    const formattedBody = body.split(' ').filter((el,index)=> index<8)
    if(formattedBody.length==8)formattedBody.push("...")
    
    const formattedSubject = subject.split(' ').filter((el,index)=>index<3)
    if(formattedSubject.length==3)formattedSubject.push('...')

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
                <Link onClick={selectMail} className="linkStyles" to='/mail'>
                    <span>{formattedSubject.join(' ')}</span>
                    <span className="mail__subject"> {formattedBody.join(' ').replace(/(\r\n|\n|\r)/gm,"")}</span>
                </Link>
                  
            </div>
            <div className="mail__right">
                <span className="timestamp">{timestamp}</span>
            </div>
           
        </article>
    )
}

export default Mail
