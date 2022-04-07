import { createSignal, onMount  } from "solid-js";

function App() {

  const [todos, setTodos] = createSignal([]);
  let todoText;

  onMount(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  });

  function addTodo(event) {
    event.preventDefault();
    const next = [...todos(), todoText.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }

  function resetTodo() {
    localStorage.clear();
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }

  return (
    <div>

      <form onSubmit={addTodo}>
        <input type="text" ref={todoText} placeholder="Add a new Task to do"/>
        <input type="submit" value="Add Todo" />
      </form>

      <button onClick={resetTodo}>Reset The To Do List</button>

      <ul>
        {todos().map(todo => (<li key={todo}>{todo}</li>))}  
      </ul>
    </div>
  );
}

export default App;
