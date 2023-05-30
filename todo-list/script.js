document.addEventListener('DOMContentLoaded', function () {
    var taskInput = document.getElementById('task-input');
    var addTaskBtn = document.getElementById('add-task-btn');
    var taskList = document.getElementById('task-list');

    // Charger les tâches depuis le stockage local lors du chargement de la page
    loadTasksFromStorage();

    addTaskBtn.addEventListener('click', function () {
        var taskText = taskInput.value.trim();
        if (taskText !== '') {
            var taskItem = createTaskElement(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = '';
            saveTaskToStorage(taskText);
        }
    });

    function createTaskElement(taskText) {
        var taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = '<input type="checkbox" class="task-checkbox"><span class="task-text">' + taskText + '</span><button class="delete-btn">Delete</button>';

        var deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function () {
            taskItem.remove();
            removeTaskFromStorage(taskText);
        });

        var taskCheckbox = taskItem.querySelector('.task-checkbox');
        taskCheckbox.addEventListener('change', function () {
            if (taskCheckbox.checked) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });

        return taskItem;
    }

    function saveTaskToStorage(taskText) {
        var tasks = getTasksFromStorage();
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasksFromStorage() {
        var tasks = getTasksFromStorage();
        for (var i = 0; i < tasks.length; i++) {
            var taskItem = createTaskElement(tasks[i]);
            taskList.appendChild(taskItem);
        }
    }

    function removeTaskFromStorage(taskText) {
        var tasks = getTasksFromStorage();
        var index = tasks.indexOf(taskText);
        if (index !== -1) {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    function getTasksFromStorage() {
        var tasksJson = localStorage.getItem('tasks');
        return tasksJson ? JSON.parse(tasksJson) : [];
    }
});
