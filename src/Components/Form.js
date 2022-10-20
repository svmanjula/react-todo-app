import React from 'react'
import {AiOutlinePlus} from "react-icons/ai"

const Form = ({setInputText ,setTodos, todos, inputText, setStatus}) => {
const inputTextHandler =(e) =>{
  setInputText(e.target.value)
}
const submitTodoHandler =(e) =>{
  e.preventDefault();
  setTodos([...todos, {text: inputText, completed:false, id:Date.now() }])
  setInputText("")
}

const changeHandler =(e)=>{

setStatus(e.target.value)
}
  return (
    <div>
        <form>
      <input  value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick ={submitTodoHandler} className="todo-button" type="submit">
        <AiOutlinePlus/>
      </button>
      <div className="select">
        <select  onChange={changeHandler} className="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    </div>
  )
}

export default Form