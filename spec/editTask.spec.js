describe('editTask', function() {
  it('should update the text of a task by id and persist to localStorage', function() {
    // Arrange
    localStorage.clear();
    const tasks = [
      { id: 1, text: 'Old Task', completed: false }
    ];
    window.saveTasks(tasks);
    // Act
    const edited = window.editTask(tasks, 1, { text: 'Updated Task' });
    window.saveTasks(edited);
    // Assert
    const persisted = window.getTasks();
    expect(persisted[0].text).toBe('Updated Task');
    localStorage.clear();
  });

  it('should not modify other tasks', function() {
    const tasks = [
      { id: 1, text: 'Task 1', completed: false },
      { id: 2, text: 'Task 2', completed: false }
    ];
    const result = window.editTask(tasks, 1, { text: 'Changed' });
    expect(result[1].text).toBe('Task 2');
  });
});
