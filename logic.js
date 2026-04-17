// Adds a new task to the list and returns the updated array
function addTask(tasks, newTask) {
  if (!Array.isArray(tasks)) throw new Error("tasks must be an array");
  if (!newTask || typeof newTask.text !== "string" || !newTask.text.trim()) {
    throw new Error("Task text is required");
  }
  if (tasks.some(task => task.id === newTask.id)) {
    throw new Error("Task ID must be unique");
  }
  return [...tasks, newTask];
}

function editTask(tasks, id, updates) {
  return tasks.map(task => task.id === id ? { ...task, ...updates } : task);
}

function deleteTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}

function toggleComplete(tasks, id) {
  return tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
}

function filterTasks(tasks, { text = '', status = 'all', priority = 'all' } = {}) {
  return tasks.filter(task => {
    const matchesText = task.text.toLowerCase().includes(text.toLowerCase());
    const matchesStatus = status === 'all' || (status === 'completed' ? task.completed : !task.completed);
    const matchesPriority = priority === 'all' || task.priority === priority;
    return matchesText && matchesStatus && matchesPriority;
  });
}

window.filterTasks = filterTasks;

window.addTask = addTask;
window.editTask = editTask;
window.deleteTask = deleteTask;
window.toggleComplete = toggleComplete;
