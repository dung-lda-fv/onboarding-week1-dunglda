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
        <span class="task-text" data-id="${task.id}">${task.text}</span>
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

  // Filter/search handler
  document.getElementById('search').addEventListener('input', function(e) {
    const text = e.target.value;
    const tasks = getTasks();
    const filtered = filterTasks(tasks, { text });
    renderTasks(filtered);
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
      e.preventDefault(); // prevent label from toggling checkbox, which would re-render and wipe the edit form
      console.log('[DEBUG] Edit icon clicked for id:', e.target.getAttribute('data-id'));
      const id = Number(e.target.getAttribute('data-id'));
      const tasks = getTasks();
      const task = tasks.find(t => t.id === id);
      if (!task) return;
      // Inline editing: replace text with input and buttons
      const li = e.target.closest('li');
      const textSpan = li.querySelector('.task-text');
      const oldText = task.text;
      textSpan.innerHTML = `<input type='text' class='edit-inline' value="${oldText}" style='width:70%'> <button class='btn-small save-inline' data-id='${id}'>Save</button> <button class='btn-small grey cancel-inline' data-id='${id}'>Cancel</button>`;
    }
    // Save inline handler (event delegation)
    if (e.target.classList.contains('save-inline')) {
      console.log('[DEBUG] Save clicked for id:', e.target.getAttribute('data-id'));
      
      const id = Number(e.target.getAttribute('data-id'));
      const li = e.target.closest('li');
      const textSpan = li.querySelector('.task-text');
      const newText = textSpan.querySelector('.edit-inline').value;
      const tasks = getTasks();
      console.log('[DEBUG] Tasks before editTask:', JSON.stringify(tasks));
      const updated = editTask(tasks, id, { text: newText });
      console.log('[DEBUG] Tasks after editTask:', JSON.stringify(updated));
      saveTasks(updated);
      console.log('[DEBUG] localStorage after save:', localStorage.getItem('tasks'));
      renderTasks(updated);
      setTimeout(() => {
        console.log('[DEBUG] localStorage after render:', localStorage.getItem('tasks'));
      }, 0);
    }
    // Cancel inline handler (event delegation)
    if (e.target.classList.contains('cancel-inline')) {
      const tasks = getTasks();
      renderTasks(tasks);
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
