describe('addTask', function() {
  it('should add a new task to the list', function() {
    // Arrange
    const tasks = [];
    const newTask = { id: 1, text: 'Test Task', completed: false };
    // Act
    // addTask should be implemented in logic.js
    // This will fail until addTask exists
    const result = window.addTask(tasks, newTask);
    // Assert
    expect(result.length).toBe(1);
    expect(result[0]).toEqual(newTask);
  });
});
