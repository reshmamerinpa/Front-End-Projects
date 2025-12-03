document.addEventListener("DOMContentLoaded", () => {
    const textTodo = document.getElementById("textTodo");
    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Load tasks from the DummyJSON API
    loadTasks();

    addTask.addEventListener("click", () => {
        const taskText = textTodo.value.trim();
        if (taskText) {
            addTask(taskText);
            textTodo.value = '';
        }
    });

    function addTask(taskText) {
        // Here, you would ideally post to your backend, but since this is a demo, we'll just add locally
        const li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    function loadTasks() {
        fetch('https://dummyjson.com/todos')
            .then(response => response.json())
            .then(data => {
                data.todos.forEach(todo => {
                    createTaskElement(todo);
                });
            })
            .catch(error => console.error('Error:', error));
    }

    function createTaskElement(todo) {
        const li = document.createElement("li");
        li.textContent = todo.todo;
        if (todo.completed) {
            li.classList.add("completed");
        }

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
