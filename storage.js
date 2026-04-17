/**
 * Task data model
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} text
 * @property {boolean} completed
 * @property {string} [dueDate]
 * @property {string} [priority] // low | medium | high
 */

function getTasks() {
  return JSON.parse(localStorage.getItem('tasks') || '[]');
}

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Expose for browser console/manual testing
window.getTasks = getTasks;
window.saveTasks = saveTasks;
