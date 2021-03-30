import { useEffect, useState } from 'react';
import './App.css';
import Create from './Components/Create';
import Header from './Components/Header';
import Task from './Components/Task';



function App() {
  //BEM 
  const [tasks,setTasks] = useState([]);

  const [newTasks,setNewTasks]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/tasks')
    .then((response) => response.json())
    .then((json) => setTasks(json));
  },[newTasks])

  return (
    <div className="app">
        <Header />
      <div className="container">
        <Create tasks={newTasks}/>
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
