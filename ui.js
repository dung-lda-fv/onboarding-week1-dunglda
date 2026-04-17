// Renders the list of tasks
function renderTasks(tasks) {
  const list = document.getElementById('task-list');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `collection-item ${task.completed ? 'grey lighten-3' : ''}`;
    li.innerHTML = `
      <label>
        <input type="checkbox" class="complete-task" data-id="${task.id}" ${task.completed ? 'checked' : ''} />
        <span>${task.text}</span>
        <span class="right">
          ${task.priority ? `<span class="badge ${task.priority}">${task.priority}</span>` : ''}
          ${task.dueDate ? `<span class="badge">${task.dueDate}</span>` : ''}
          <i class="material-icons edit-task" data-id="${task.id}" style="cursor:pointer">edit</i>
          <i class="material-icons delete-task" data-id="${task.id}" style="cursor:pointer">delete</i>
        </span>
      </label>
    `;
    list.appendChild(li);
  });
}

// Wire UI events to logic
function setupUIHandlers() {
  const form = document.getElementById('add-task-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = document.getElementById('task-text').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const tasks = getTasks();
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      dueDate,
      priority
    };
    const updated = addTask(tasks, newTask);
    saveTasks(updated);
    renderTasks(updated);
    form.reset();
    M.updateTextFields();
  });

  document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-task')) {
      const id = Number(e.target.getAttribute('data-id'));
      const tasks = getTasks();
      const updated = deleteTask(tasks, id);
      saveTasks(updated);
      renderTasks(updated);
    }
    if (e.target.classList.contains('edit-task')) {
      // For brevity, editing logic can be implemented in Task 5
      alert('Edit feature coming soon!');
    }
  });

  document.getElementById('task-list').addEventListener('change', function(e) {
    if (e.target.classList.contains('complete-task')) {
      const id = Number(e.target.getAttribute('data-id'));
      const tasks = getTasks();
      const updated = toggleComplete(tasks, id);
      saveTasks(updated);
      renderTasks(updated);
    }
  });
}

window.renderTasks = renderTasks;
window.setupUIHandlers = setupUIHandlers;
