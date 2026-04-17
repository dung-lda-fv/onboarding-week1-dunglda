// Renders the list of tasks
function renderTasks(tasks) {
  const list = document.getElementById('task-list');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `collection-item ${task.completed ? 'grey lighten-3' : ''}`;
    li.innerHTML = `
      <label>
        <input type="checkbox" ${task.completed ? 'checked' : ''} disabled />
        <span>${task.text}</span>
        <span class="right">
          ${task.priority ? `<span class="badge ${task.priority}">${task.priority}</span>` : ''}
          ${task.dueDate ? `<span class="badge">${task.dueDate}</span>` : ''}
          <i class="material-icons edit-task" style="cursor:pointer">edit</i>
          <i class="material-icons delete-task" style="cursor:pointer">delete</i>
        </span>
      </label>
    `;
    list.appendChild(li);
  });
}

// Expose for manual testing
window.renderTasks = renderTasks;
