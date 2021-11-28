let taskListElement, taskTitleElement, addButton;

document.addEventListener('DOMContentLoaded', ready);

function ready() {
  taskListElement = document.querySelector('.task-list');
  taskTitleElement = document.querySelector('.task-title');
  addButton = document.querySelector('.add-button');

  taskTitleElement.addEventListener('change', clickAddButton);
  addButton.addEventListener('click', addNewTask);
}

function clickAddButton() {
  addButton.disabled = !taskTitleElement.value.length;
}

function addNewTask() {
    const li = document.createElement('li');
    li.className = 'task-list_item';
    li.innerHTML = taskTitleElement.value;
    taskListElement.append(li);

    taskTitleElement.value = '';
    addButton.disabled = true;
}




