# To-Do List App Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modular, browser-based to-do list app with Material Design, supporting add/edit/delete, complete/incomplete, filter/search, due dates, priorities, and localStorage persistence.

**Architecture:** The app is split into `index.html`, `storage.js`, `ui.js`, and `logic.js`. Each file has a clear responsibility. UI uses Material Design CSS. All logic is modular and testable.

**Tech Stack:** HTML5, plain JavaScript (ES6 modules), Material Design CSS (e.g., Materialize), browser localStorage, basic CSS.

---

### Task 1: Project Scaffold & Material Design

**Files:**
- Create: `index.html`, `storage.js`, `ui.js`, `logic.js`, `style.css`

- [ ] **Step 1: Scaffold project structure**
  - Create the above files in the project root.

- [ ] **Step 2: Add Material Design CSS/JS to `index.html`**
  - Use CDN for Materialize or MUI CSS.
  - Example:
    ```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    ```

- [ ] **Step 3: Link JS modules and CSS in `index.html`**
  - Use `<script type="module" src="logic.js"></script>`
  - Link `style.css`.

- [ ] **Step 4: Commit**
  - `git add . && git commit -m "chore: scaffold project and add Material Design"`

### Task 2: Data Model & Storage Module

**Files:**
- Modify: `storage.js`
- Test: (manual in browser console)

- [ ] **Step 1: Define Task data model (JSDoc or comment)**
  - Document: id, text, completed, dueDate, priority.

- [ ] **Step 2: Implement storage functions**
  - `getTasks()`, `saveTasks(tasks)` using `localStorage`.
  - Example:
    ```js
    export function getTasks() {
      return JSON.parse(localStorage.getItem('tasks') || '[]');
    }
    export function saveTasks(tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    ```

- [ ] **Step 3: Commit**
  - `git add storage.js && git commit -m "feat: add storage module for tasks"`

### Task 3: UI Skeleton & Basic Rendering

**Files:**
- Modify: `index.html`, `ui.js`, `style.css`

- [ ] **Step 1: Add basic HTML structure to `index.html`**
  - Header, main container, add-task form, filter/search bar, task list container.

- [ ] **Step 2: Implement `renderTasks(tasks)` in `ui.js`**
  - Render tasks as Material Design list with checkboxes, edit/delete icons, color-coded priorities.

- [ ] **Step 3: Style with Material CSS and `style.css`**

- [ ] **Step 4: Commit**
  - `git add index.html ui.js style.css && git commit -m "feat: add UI skeleton and basic rendering"`

### Task 4: Core Logic (Add/Edit/Delete/Complete)

**Files:**
- Modify: `logic.js`, `ui.js`, `storage.js`

- [ ] **Step 1: Implement add/edit/delete/complete logic in `logic.js`**
  - Functions: `addTask`, `editTask`, `deleteTask`, `toggleComplete`
  - Each updates storage and re-renders UI.

- [ ] **Step 2: Wire UI events to logic in `ui.js`**
  - Add event listeners for form submit, edit/delete buttons, checkboxes.

- [ ] **Step 3: Commit**
  - `git add logic.js ui.js storage.js && git commit -m "feat: core logic for add/edit/delete/complete"`

### Task 5: Filter, Search, Due Date, Priority

**Files:**
- Modify: `logic.js`, `ui.js`, `index.html`

- [ ] **Step 1: Implement filter/search logic in `logic.js`**
  - Filter by text, status, priority.

- [ ] **Step 2: Add due date and priority fields to add/edit form in `index.html` and `ui.js`**

- [ ] **Step 3: Update rendering to show due date and priority**

- [ ] **Step 4: Commit**
  - `git add logic.js ui.js index.html && git commit -m "feat: filter, search, due date, priority"`

### Task 6: Persistence & UX Polish

**Files:**
- Modify: `storage.js`, `ui.js`, `logic.js`, `style.css`

- [ ] **Step 1: Ensure all changes persist instantly to localStorage**

- [ ] **Step 2: Add responsive tweaks and polish UI**

- [ ] **Step 3: Manual test: add, edit, delete, filter, complete, reload page**

- [ ] **Step 4: Commit**
  - `git add . && git commit -m "chore: polish and persistence checks"`

### Task 7: Documentation & Final Review

**Files:**
- Create: `README.md`
- Modify: `index.html`

- [ ] **Step 1: Write usage instructions and feature list in `README.md`**

- [ ] **Step 2: Add comments to code for clarity**

- [ ] **Step 3: Final manual test and review**

- [ ] **Step 4: Commit**
  - `git add README.md index.html && git commit -m "docs: add usage instructions and final review"`
