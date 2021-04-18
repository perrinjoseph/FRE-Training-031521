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

function EmailItem() {
    const history = useHistory();
    return (
        <main className="emailItem">
            <header className="emailItem__header">
                <Link to="/">
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
                        <h1>Name</h1>
                        <section className="moreInfo"><span className="recieve">to me</span><ArrowDropDownIcon/></section>
                    </div>
                    <section className="moreInfo"><span className="recieve">perrinjoseph@gmail.com</span></section>
                    <ReplyIcon className="grayIcon"/>
                    <ForwardIcon className="grayIcon"/>
                    <MoreVertIcon className="grayIcon"/>
                    
                </div>
                <section className="emailItem__message">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </section>

            </article>

           
        </main>
    )
}

export default EmailItem
