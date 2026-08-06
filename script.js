const inputTask = document.querySelector('.input');
const inputBtn = document.querySelector('.input-btn');
const active = document.querySelector('.active');
const pending = document.querySelector('.pending');
const completed = document.querySelector('.complete');
const leftItem = document.querySelector('.left-item');
const clearComplete = document.querySelector('.clear-complete');
const taskList = document.querySelector('.task-list')

inputBtn.addEventListener('click', () => {
    addToDo(inputTask.value);
})

inputTask.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addToDo(inputTask.value);
    }
})

const toDos = [];

const addToDo = (input) => {
    if (input.trim() === '') return;
    const toDo = {
        task: input,
        id: Date.now(),
        completed: false
    };

    toDos.push(toDo)
    renderToDos(toDo);
    inputTask.value = '';
}

const renderToDos = (toDo) => {
    const listItem = document.createElement('li')
    const ul = taskList.appendChild(listItem)

    const task = document.createElement('div')
    task.classList.add('task')
    listItem.appendChild(task)

    const input = document.createElement('input')
    input.type = 'checkbox'
    const taskSpan = document.createElement('span')
    taskSpan.textContent = toDo.task
    task.append(input, taskSpan)

    const action = document.createElement('div')
    action.classList.add('actions')
    const btn = document.createElement('button')
    btn.textContent = 'clear'
    action.appendChild(btn)
    listItem.appendChild(action)
}




