import React from 'react'

export default function Inputs({ inputValue, setInputValue, addTask, removeAllTasks }) {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    addTask();
  };

  const handleRemoveClick = () => {
    removeAllTasks();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="inputs">
      <input 
        type="text" 
        placeholder="enter your task here" 
        id="input" 
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button type="button" id="btn" onClick={handleAddClick}>Add</button>
      <button type="button" id="remove" onClick={handleRemoveClick}>Remove All</button>
    </div>
  )
}