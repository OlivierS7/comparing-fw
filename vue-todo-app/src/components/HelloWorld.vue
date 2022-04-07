<template>
  <div>

    <form v-on:submit.prevent="addTodo">
      <input v-model="todoText" placeholder="Add a new Task to do">
      <button type="submit">Add Todo</button>
    </form>

    <button v-on:click="resetTodo">Reset The To Do List</button>

    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{ todo }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      todos: [],
      todoText: '',
    };
  },
  methods: {
    addTodo: function () {
      this.todos = [...this.todos, this.todoText];
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    resetTodo: function () {
      localStorage.clear();
      const existingTodos = localStorage.getItem('todos');
      this.todos = JSON.parse(existingTodos) || [];
    },
  },
  mounted: function () {
    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos) || [];
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
