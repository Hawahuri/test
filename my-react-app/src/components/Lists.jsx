import React from 'react'

export default function Lists({ tasks, toggleTask, deleteTask }) {
  return (
    <div id="lists">
      {tasks.map(task => (
        <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => toggleTask(task.id)} 
          />
          <span>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}