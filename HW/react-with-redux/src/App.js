import './App.css';
import React from  'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './Actions/index'

function App() {
  const counter = useSelector(state=>state.counter)
  const loggedIn = useSelector(state=>state.logged)
  const dispatch = useDispatch();

  return (
    <div className="app">
        <h1>{counter}</h1>
        <button className="btn" onClick ={()=>dispatch(increment())}>+</button>
        <button className="btn" onClick={()=>dispatch(decrement())}>-</button>
        <h3>{loggedIn?"Loggin in": "Sign In"}</h3>
    </div>
  );
}

export default App;
