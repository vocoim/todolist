let taskListElement, taskTitleElement, addButton;

document.addEventListener('DOMContentLoaded', ready);

function ready() {
    taskListElement = document.querySelector('.task-list');
    taskTitleElement = document.querySelector('.task-title');
    addButton = document.querySelector('.add-button');

    taskTitleElement.addEventListener('keyup', taskKeyupHandler);
    addButton.addEventListener('click', addNewTask);
}

function taskKeyupHandler(event) {
    clickEnter(event);
    addButtonDisabling();
}

function clickEnter(event) {
    if (event.keyCode === 13) {
        addNewTask();
    }
}

function addButtonDisabling() {
    addButton.disabled = !taskTitleElement.value.length;
}

function addNewTask() {
    if (!taskTitleElement.value.length) {
        return;
    }

    const li = document.createElement('li');
    li.className = 'task-list_item';
    li.innerHTML = taskTitleElement.value;
    taskListElement.append(li);

    taskTitleElement.value = '';
    addButton.disabled = true;
}




