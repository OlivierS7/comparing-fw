function addTodo(todoText) {
  Alpine.store("todos").push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function resetTodo() {
    localStorage.clear();
    Alpine.store("todos", []);
  }

document.addEventListener("alpine:init", () => {
  const existingTodos = localStorage.getItem("todos");
  todos = JSON.parse(existingTodos) || [];
  Alpine.store("todos", todos);
});
