import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  // State
  const [todos, setTodos] = useState([]);

  // Binding
  const todoText = useRef();

  // Side Effects / Lifecycle
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);

  // Events
  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }

  function resetToDo() {
    localStorage.clear();
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Add a new Task to do" ref={todoText} />
        <input type="submit" value="Add Todo" />
      </form>

      <button onClick={resetToDo}>Reset The To Do List</button>

      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}  
      </ul>
    </div>
  );
}

export default App;
