import './App.css';
import { useState , useEffect} from 'react';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  const [inputText, setInputText] = useState("")
  const [status, setStatus] = useState("all")
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) !==null ? JSON.parse(localStorage.getItem("todos")) : []) 
  const [filteredTodos, setFilteredTodos] = useState([])



  useEffect (()=>{
    filterHandler()
  }, [todos, status ] )

  const filterHandler = ( ) =>{
    switch(status){
      case "completed":
        return setFilteredTodos (todos.filter((todo) => todo.completed )) 
        break;
        case "uncompleted":
        return setFilteredTodos(todos.filter((todo) => !todo.completed ))
        break;

        case "all":
          return setFilteredTodos(todos);
          default:
          return setFilteredTodos(todos);
       
    }
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  



  return (
    <div className="App">
      <header>
      <h1>Todo List</h1>
    </header>
    <Form setInputText ={setInputText} todos ={todos} setTodos={setTodos} inputText={inputText}  setStatus={setStatus} />
  <TodoList filteredTodos ={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
