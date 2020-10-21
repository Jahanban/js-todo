// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
// document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event) {
    event.preventDefault();//to prevent page from refreshing when plus button is clicked
    // console.log('hello');
    // Creating Todo div
    const todoDiv = document.createElement('div'); // creating the div
    todoDiv.classList.add('todo'); // adding class to the div
    // Create the LI
    const newTodo = document.createElement('li'); //creating li
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to  do list
    todoList.appendChild(todoDiv);
    //Clear todo input value
    todoInput.value = "";
}

// Creating the delete and check function

function deleteCheck(e) {
    // console.log(e.target);
    const item = e.target;
    //Delet the to do item
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // animation to deleting an item
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })

    }

    //check mark to complete
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// Create function for a filter

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "pending":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}