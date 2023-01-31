let myBtn = document.getElementById('add-btn')
myBtn.addEventListener('click', addItem)

document.addEventListener('keydown', entItem)

function addItem(data) {
    let myInput = document.getElementById('shooter')
    let myList = document.getElementById('todo-list')

    if (myInput.value !== '' && myInput.value !== null) {
        let newItem = document.createElement('li')
        newItem.classList.add('list-group-item');
        newItem.innerText = myInput.value
        myList.appendChild(newItem);
    }
}

function entItem(inp) {
    if (inp.key == 'Enter')
        addItem()
}

function finishTask() {
    let taskName = document.getElementById{'task-name'};
    if(taskName.classList.contains('completed-item')) {
        taskName.classList.remove('completed-item')
    }
    else {
        taskName.classList.add('completed-item')
    }
}