import React from 'react'
import Categories from '../Categories/Categories'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './GmailBody.css'
import EmailItem from './EmailItem/EmailItem'
import MailList from './MailList/MailList'

function GmailBody() {
    return (
        <main className="gmailBody">
            <header className="gmailBody__header">
                <Categories/>
            </header>
            <section className="gmailBody__mail">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <MailList/>
                        </Route>

                        <Route exact path="/mail">
                            <EmailItem/>
                        </Route>
                    </Switch>
                </Router>
            </section>
            
        </main>
    )
}

export default GmailBody
