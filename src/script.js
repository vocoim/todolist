let navElements, elements;

document.addEventListener('DOMContentLoaded', ready);

function ready() {
    navElements = document.querySelectorAll('.navbar-item');
    elements = document.querySelectorAll('.new-task_item');

    taskListElement = document.querySelector('.task-list');
    taskTitleElement = document.querySelector('.task-title');
    addButton = document.querySelector('.add-button');


    taskTitleElement.addEventListener('keyup', taskKeyupHandler);
    addButton.addEventListener('click', addNewTask);

    activateNavElement();
    changeNavElement(0)
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

function activateNavElement() {
    navElements.forEach((item, index) => {
        item.addEventListener('click', () => changeNavElement(index));
    });
}

function changeNavElement(index) {
    for (let item of navElements) {
        item.classList.remove('active');
    }
    navElements[index].classList.add('active');
    showSection(navElements[index].dataset.type);
}

function showSection(type) {
    elements.forEach(element => {
        if (element.dataset.type !== type) {
            element.classList.add('hidden')
        } else {
            element.classList.remove('hidden');
        }
    })
}




