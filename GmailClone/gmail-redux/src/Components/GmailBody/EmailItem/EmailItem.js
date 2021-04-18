import React from 'react'
import {useHistory} from 'react-router-dom'
import './EmailItem.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import WarningIcon from '@material-ui/icons/Warning';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';


function EmailItem() {
    const history = useHistory();
    return (
        <main className="emailItem">
            <header className="emailItem__header">
                <IconButton>
                    <ArrowBackIcon onClick={()=>history.push("/")}/>
                </IconButton>
                
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
        </main>
    )
}

export default EmailItem
