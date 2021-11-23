// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelector('.task-title').onkeyup = () => {
//     if (document.querySelector('.task-title').value.length > 0) {
//       document.querySelector('.add-button').disabled = false;
//     } else {
//       document.querySelector('.add-button').disabled = true;
//     }
//   }
//
//   document.querySelector('.add-button').onclick = () => {
//     const newTask = document.querySelector('.task-title').value;
//
//     const li = document.createElement('li');
//     li.className = 'task-list_item';
//     li.innerHTML = newTask;
//     document.querySelector('.task-list').append(li);
//
//     document.querySelector('.task-title').value = '';
//     document.querySelector('.add-button').disabled = true;
//   }
// }
// )

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




