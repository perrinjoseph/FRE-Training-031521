import { useEffect, useState } from 'react';
import './App.css';
import Create from './Components/Create';
import Header from './Components/Header';
import Task from './Components/Task';



function App() {
  //BEM 
  const [tasks,setTasks] = useState([]);
  const [deleted,setDelete]=useState("")
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => response.json())
    .then((json) => setTasks(json));
    
  },[deleted])

  return (
    <div className="app">
        <Header />
      <div className="container">
        <Create/>
        <div className="grid">
         {tasks.map((el)=>(
           <Task user={el.userId} title={el.title} completed={el.completed} key={el.id}/>
         ))}
        </div>
      </div>
    </div>
  );
}

export default App;
