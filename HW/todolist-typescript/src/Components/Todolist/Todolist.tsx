import React from 'react';
import ListItem from '../ListItem/ListItem';
import './Todolist.css';

const Todolist:React.FunctionComponent =function(){
    return (
       <main className="todolist">
           <header className="todolist__header">
                <form>
                    <input type="text" placeholder="Enter task.."></input>
                    <button>Create task</button>
                </form>
           </header>
           <main className="todolist__content">
            
           </main>
       </main>
    )
}

export default Todolist
