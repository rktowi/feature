document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
  });
  
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="markAsCompleted(this)">Zakończ</button>
        <button onclick="removeTask(this)">Usuń</button>
      `;
      taskList.appendChild(taskItem);
  
      saveTasks();
      taskInput.value = '';
    }
  }
  
  function markAsCompleted(button) {
    const taskItem = button.parentNode;
    taskItem.classList.toggle('completed');
    saveTasks();
  }
  
  function removeTask(button) {
    const taskItem = button.parentNode;
    taskItem.remove();
    saveTasks();
  }
  
  function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];
    for (const taskItem of taskList.children) {
      const taskText = taskItem.querySelector('span').innerText;
      const completed = taskItem.classList.contains('completed');
      tasks.push({ text: taskText, completed: completed });
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const taskList = document.getElementById('taskList');
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      for (const task of tasks) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
          <span>${task.text}</span>
          <button onclick="markAsCompleted(this)">Zakończ</button>
          <button onclick="removeTask(this)">Usuń</button>
        `;
        if (task.completed) {
          taskItem.classList.add('completed');
        }
        taskList.appendChild(taskItem);
      }
    }
  }
  