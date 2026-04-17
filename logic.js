// Adds a new task to the list and returns the updated array
function addTask(tasks, newTask) {
  return [...tasks, newTask];
}

// Make addTask available globally for Jasmine tests
window.addTask = addTask;

// Export for ES6 modules if needed
// export { addTask };
