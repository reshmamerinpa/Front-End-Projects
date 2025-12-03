const inputTextTodo = document.getElementsByClassName("inputTextTodo")[0];
const addTaskButton = document.getElementsByClassName("addTask")[0];
const tablerow = document.getElementById('tableRows');
let todos = [];


fetch('https://dummyjson.com/todos?limit=5&skip=10')
.then(response => response.json())
.then(response => {
    var data = response.todos;
    let rows = '';
    data.forEach(data => {
    rows+=`<tr>
            <td><input type='checkbox' class="check"></td>
            <td class="todoText">${data.todo}</td>
            <td>
                <div  class="deleteTask" data-id="${data.userId}">
                    <img src="./delete.png" alt="image">
                </div>
            </td>
        </tr>` 
 })
 document.getElementById('tableRows').innerHTML =rows;
   deleteTableData();
})
.catch(error => console.log(error));
                


addTaskButton.addEventListener("click", () => {
    const taskText = inputTextTodo.value.trim();
    if (taskText) {
        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: taskText,
                completed:false,
                userId: 5,
            })
        })
        .then(response => response.json())
        .then(newTodo => {
            appendTaskToTable(newTodo); 
        })
        .catch(error => console.log(error));  
          inputTextTodo.value = '';
    }
});


function appendTaskToTable(todo) {
    const newRow = `<tr>
        <td><input type='checkbox' class="check"></td>
        <td class="todoText">${todo.todo}</td>
        <td>
            <div  class="deleteTask" data-id="${todo.userId}">
                <img src="./delete.png" alt="image">
            </div>
        </td>
    </tr>`;
    tablerow.innerHTML += newRow; 
    deleteTableData();
}

function deleteTableData() {
    const deleteButtons = document.querySelectorAll('.deleteTask');
    deleteButtons.forEach(button => {
        button.onclick = () => {
            const todoId = button.getAttribute('data-id');
            fetch(`https://dummyjson.com/todos/${todoId}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    button.closest('tr').remove(); 
                    console.log('Todo deleted:', todoId);
                }
            })
            .catch(error => console.error('Error :', error));
        };
    });
}

