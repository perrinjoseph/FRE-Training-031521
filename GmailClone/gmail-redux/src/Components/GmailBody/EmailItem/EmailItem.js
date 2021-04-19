import React from 'react'
import {useHistory, Link} from 'react-router-dom'
import './EmailItem.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import WarningIcon from '@material-ui/icons/Warning';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { Avatar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ReplyIcon from '@material-ui/icons/Reply';
import ForwardIcon from '@material-ui/icons/Forward';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import AllActions from '../../../Redux/Actions';

function EmailItem() {
    const history = useHistory();
    const dispatch = useDispatch();
    let selectMail = useSelector(store=>store.userInformation.selectMail);
    
    const unSelectMail = () =>{
        dispatch(AllActions.userActions.unSelectMail())
    }   

    if(Object.keys(selectMail).length>0){
        selectMail = selectMail.body.split(' ').join(' ')
    }
    
    return (
        <main className="emailItem">
            <header className="emailItem__header">
                <Link to="/" onClick={unSelectMail}>
                    <IconButton>
                        <ArrowBackIcon/>
                    </IconButton>
                </Link>
                
                <IconButton>
                    <DeleteIcon/>
                </IconButton>

                <IconButton>
                    <WarningIcon/>
                </IconButton>

                <IconButton>
                    <ScheduleIcon/>
                </IconButton>

                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
                
            </header>
            <article className="emailItem__details">
                <div className="profileInfo">
                    <Avatar/>
                    <div className="center">
                        <h1>{selectMail.from}</h1>
                        <section className="moreInfo"><span className="recieve">to me</span><ArrowDropDownIcon/></section>
                    </div>
                    <ReplyIcon className="grayIcon"/>
                    <ForwardIcon className="grayIcon"/>
                    <MoreVertIcon className="grayIcon"/>
                    
                </div>
                <section className="emailItem__message">
                <pre>{selectMail && selectMail}</pre>
                </section>

            </article>

           
        </main>
    )
}

export default EmailItem
