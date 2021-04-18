import React from 'react'
import './Mail.css'
import {useHistory} from 'react-router-dom'

function Mail() {
    const history = useHistory();
    return (
        <article className="mail">
            <button onClick={()=>history.push('/mail')}>route</button>
        </article>
    )
}

export default Mail
