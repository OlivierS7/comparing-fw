<script>
	import { onMount } from 'svelte';

	let todos = [];
	let todoText = '';

	onMount(() => {
		const existingTodos = localStorage.getItem('todos');
    	todos = JSON.parse(existingTodos) || [];
	});

	function addTodo() {
		todos = [...todos, todoText];
    	localStorage.setItem('todos', JSON.stringify(todos));
	}

	function resetTodo() {
    	localStorage.clear();
		const existingTodos = localStorage.getItem('todos');
    	todos = JSON.parse(existingTodos) || [];
	}

</script>

<main>

	<form on:submit|preventDefault={addTodo}>
	
		<input bind:value={todoText} placeholder="Add a new Task to do">
		<input type="submit" value="Add todo">
	</form>

	<button on:click={resetTodo}>Reset The To Do List</button>

	<ul>
		{#each todos as todo}
			<li>{todo}</li>
		{/each}
	</ul>


</main>
