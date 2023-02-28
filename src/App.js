import Header from './Components/Header.js'
import Form from './Components/Form.js'
import Task from './Components/Task.js'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([]);

  
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const taskNew = { id, ...task };
    console.log(taskNew);
    setTasks([...tasks, taskNew]);
  }

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <>
      <Header />
      <Form onAdd = {addTask} />
      {tasks.map(t => (<Task  key={t.id} id = {t.id} text = {t.text}  day = {t.day}  onDelete ={deleteTask}/>))}
    </>
  );
}

export default App;
