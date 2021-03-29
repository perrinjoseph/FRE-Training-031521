import React from 'react'
import '../Styles/Create.css'
import IconButton from '@material-ui/core/IconButton'
import Add from '@material-ui/icons/Add'

function Create() {
    return (
        <div className="create">
            <header>
                <h2 className="create__header">Create Task</h2> 
                <input className="create__input" type="text" placeholder="Enter a task"></input>
                <IconButton style={{background: "black"}}>
                    <Add style={{fill: "white"}}/>
                </IconButton>
            </header>
        </div>
    )
}

export default Create
