function addProduct() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskText = document.createTextNode(taskValue);
        li.appendChild(checkbox);
        li.appendChild(taskText);

        const ul = document.querySelector('ul');
        ul.appendChild(li);
        taskInput.value = '';
    }
}