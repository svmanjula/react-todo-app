import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ todos, setTodos, todo}) => {
  const handleDelete = () => {
    const updatedTodo = todos.filter((ele) => ele.id !== todo.id);
    setTodos([...updatedTodo]);
  };

  const handleCompleted = () => {
    setTodos(todos.map(item => {
        if(item.id === todo.id){
          return { ...item, completed:!item.completed };

        }
         return item; 
      }
      )
    );
  };


  return (
    <div className="todo">
      <li  key ={todo.id} className={`todo-items ${todo.completed ? "completed" : ""}`}>
       
        {todo.text}
      </li>
      <button onClick={handleCompleted} className="complete-btn">
        <AiFillCheckSquare />
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <AiFillDelete />
      </button>
    </div>
  );
};

export default Todo;
