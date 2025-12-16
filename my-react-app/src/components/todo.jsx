import { useState } from 'react'
import './todo.css'
import Inputs from './components/Inputs.jsx'
import Card from "./components/box.jsx";
import Lists from './components/Lists.jsx'

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue.trim(), completed: false }]);
      setInputValue('');
    }
  };

  const removeAllTasks = () => {
    setTasks([]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
      <Card>
        <Inputs 
          inputValue={inputValue} 
          setInputValue={setInputValue} 
          addTask={addTask} 
          removeAllTasks={removeAllTasks} 
        />
        <Lists tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </Card>
  )
}

export default App