function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.onclick = () => toggleTask(taskSpan);

    const deleteBtn = document.createElement('bttn');
    deleteBtn.textContent = 'x';
    deleteBtn.onclick = () => deleteTask(taskItem);

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);


    taskInput.value = '';

}


function toggleTask(taskSpan) {
    taskSpan.classList.toggle('completed');

}

function deleteTask(taskItem) {
    taskItem.remove();
}