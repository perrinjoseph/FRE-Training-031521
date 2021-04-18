import React from 'react'
import './Sidebar.css'
import logo from '../../Images/gmail-logo.png'
import plusIcon from '../../Images/plusIcon.png'
import InboxIcon from '@material-ui/icons/Inbox';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import WarningIcon from '@material-ui/icons/Warning';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import TextsmsIcon from '@material-ui/icons/Textsms';
import DraftsIcon from '@material-ui/icons/Drafts';
import ScheduleIcon from '@material-ui/icons/Schedule';
import StarIcon from '@material-ui/icons/Star';
import MailIcon from '@material-ui/icons/Mail';

function Sidebar() {
    return (
        <nav className="sidebar">
            <button className="sidebar__composeBtn">
                <img className="sidebar__composeIcon" src={plusIcon}></img>
                Compose
            </button>
            <section className="sidebar__nav">

                <article className="sidebar__item">
                    <InboxIcon className="grayIcon"/>
                    <span className="sidebar__nav__title">Inbox</span>
                </article>

                <article className="sidebar__item">
                    <SendIcon className="grayIcon"/>
                    <span className="sidebar__nav__title">Sent</span>
                </article>

                <article className="sidebar__item">
                    <DeleteIcon className="grayIcon"/>
                    <span className="sidebar__nav__title">Trash</span>
                </article>

                <article className="sidebar__item">
                    <WarningIcon className="grayIcon"/>
                    <span className="sidebar__nav__title">Spam</span>
                </article>

                <article className="sidebar__item">
                    <LabelImportantIcon className="grayIcon"/>
                    <span className="sidebar__nav__title">Important</span>
                </article>

                <article className="sidebar__item">
                    <TextsmsIcon className="grayIcon"/>
                    <span className="sidebar__nav__title">Chats</span>
                </article>

                <article className="sidebar__item">
                    <DraftsIcon className="grayIcon"/>
                    <span className="sidebar__nav__title">Drafts</span>
                </article>

                <article className="sidebar__item">
                    <ScheduleIcon className="grayIcon"/>
                    <span className="sidebar__nav__title">Schedule</span>
                </article>

                <article className="sidebar__item">
                    <StarIcon className="grayIcon"/>
                    <span className="sidebar__nav__title">Starred</span>
                </article>

                <article className="sidebar__item">
                    <MailIcon className="grayIcon"/>
                    <span className="sidebar__nav__title">All Mail</span>
                </article>


            </section>
        </nav>
    )
}

export default Sidebar
