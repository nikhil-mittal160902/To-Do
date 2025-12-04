let taskToAdd = document.querySelector('tasks');
let taskTextInput = document.querySelector('.taskText');
let taskButton = document.querySelector('.taskButton');

taskButton.addEventListener('click', addTask)

function addTask(e) {
    e.preventDefault();
    taskText = taskTextInput.value;
    taskTextInput.value = '';
    let newTask = document.createElement('div')
    newTask.setAttribute('class', 'task')
    let newTaskText = document.createElement('span')
    newTaskText.innerHTML = taskText
    let newTaskBtn = document.createElement('button')
    newTask.addEventListener('click', removeTask)
    newTaskBtn.innerHTML = "Done?"
    newTask.appendChild(newTaskText)
    newTask.appendChild(newTaskBtn)

    document.querySelector('.tasks').appendChild(newTask)
}

function removeTask(e) {
    e.preventDefault()
    e.target.parentElement.remove()
}