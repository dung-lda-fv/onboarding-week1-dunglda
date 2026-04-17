// Adds a new task to the list and returns the updated array
function addTask(tasks, newTask) {
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

window.addTask = addTask;
window.editTask = editTask;
window.deleteTask = deleteTask;
window.toggleComplete = toggleComplete;
