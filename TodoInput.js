import React, { useState } from 'react'

function TodoInput(props) {
    const [inputText, setInputText] = useState ("");
  return (
    <div className="input-container">
        <h1>Todo App</h1>
        <h6>Add Your List Here</h6>
        <br />
        <input type="text" className="input-box-todo" value={inputText} placeholder='✍️ Add Items' 
        onChange={e=> {
            setInputText(e.target.value);
        }}/>
        <button  className="add-btn" 
        onClick={() => {props.addList(inputText)
        setInputText("")}}>+</button>
    </div>
  )
}

export default TodoInput;