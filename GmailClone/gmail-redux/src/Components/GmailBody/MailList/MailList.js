import React from 'react'
import Mail from './Mail/Mail'
import './MailList.css'

function MailList() {
    return (
        <section className="mailList">
            <Mail/>
            <Mail/>
            <Mail/>
            <Mail/>
        </section>
    )
}

export default MailList
