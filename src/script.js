let navElements, elements;

document.addEventListener('DOMContentLoaded', ready);

function ready() {
    navElements = document.querySelectorAll('.navbar-item');
    elements = document.querySelectorAll('.new-task_item');

    a();

    activateNavElement();
    changeNavElement(0);
}

function a() {

    const taskTitleElements = document.querySelectorAll('.task-title');

    taskTitleElements.forEach(element => {
        element.addEventListener('keyup', (event) => taskKeyupHandler(event, element))
    })

    const addButtons = document.querySelectorAll('.add-button');
    addButtons.forEach(button => button.addEventListener('click', addNewTask));
}

function taskKeyupHandler(event, element) {
    clickEnter(event);
    addButtonDisabling(element);
}

function clickEnter(event) {
    if (event.keyCode === 13) {
        addNewTask();
    }
}

function addButtonDisabling(taskTitleElement) {
    const activeTab = [...elements].find(element => !element.classList.contains('hidden'));
    const addButton = activeTab.querySelector('.add-button');

    addButton.disabled = !taskTitleElement.value.length;
}

function addNewTask() {
    const activeTab = [...elements].find(element => !element.classList.contains('hidden'));
    const taskTitleElement = activeTab.querySelector('.task-title');
    const button = activeTab.querySelector('.add-button');

    if (!taskTitleElement.value.length) {
        return;
    }
    const taskListElement = activeTab.querySelector('.task-list');
    const li = document.createElement('li');
    li.className = 'task-list_item';
    li.innerHTML = taskTitleElement.value;
    taskListElement.append(li);

    taskTitleElement.value = '';
    button.disabled = true;
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




