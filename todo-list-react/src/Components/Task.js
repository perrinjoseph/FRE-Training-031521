import React from 'react'
import '../Styles/Task.css'
import IconButton from '@material-ui/core/IconButton'
import Edit from '@material-ui/icons/Edit'

function Task({title,user,completed}) {
    return (
        <div className="task">
            <article className="card">
                <header className="card__header">
                    <div className={completed?"card__header__bar done":"card__header__bar"}></div>
                    <IconButton>
                        <Edit/>
                    </IconButton>
                </header>
                <main>
                    <span className="card__title"><b>{title}</b></span>
                    <span className="card__date">{new Date().toUTCString()}</span>
                    <span className="card__userId">User: {user}</span>
                    <span className={completed?"card__status":"card__status incomplete"}>{completed?"completed":"Incomplete"}</span>
                </main>
            </article>
        </div>
    )
}

export default Task
