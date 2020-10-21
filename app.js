// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);

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

}