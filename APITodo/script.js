document.addEventListener('DOMContentLoaded', () => {
    const todoTableBody = document.querySelector('#todoTable tbody');
    const todoInput = document.querySelector('#todoTitle');
    const addButton = document.querySelector('#addTodo');
    let todos = [];

    // Fetch todos from a fake API
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            todos = data;
            displayTodos();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    // Function to display todos in the table
    function displayTodos() {
        todoTableBody.innerHTML = '';
        todos.forEach(todo => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${todo.id}</td>
                <td contenteditable="true" onblur="editTodoTitle(event, ${todo.id})">${todo.title}</td>
                <td>${todo.completed ? 'Yes' : 'No'}</td>
                <td>
                    <button onclick="deleteTodo(${todo.id})">Delete</button>
                </td>
            `;
            todoTableBody.appendChild(row);
        });
    }

    // Add a new todo
    addButton.addEventListener('click', () => {
        const title = todoInput.value.trim();
        if (title) {
            const newTodo = {
                id: todos.length + 1,
                title: title,
                completed: false
            };
            todos.push(newTodo);
            displayTodos();
            todoInput.value = ''; // Clear input
        }
    });

    // Edit todo title
    window.editTodoTitle = (event, id) => {
        const newTitle = event.target.innerText;
        const todo = todos.find(t => t.id === id);
        if (todo) {
            todo.title = newTitle; // Update the title
        }
    };

    // Delete a todo
    window.deleteTodo = (id) => {
        todos = todos.filter(todo => todo.id !== id);
        displayTodos();
    };
});
