# Modular JavaScript To-Do List App Design

**Date:** 2026-04-17

## 1. Architecture Overview
- `index.html`: Main HTML file, links to Material Design CSS and JS modules.
- `storage.js`: Handles saving/loading tasks from localStorage.
- `ui.js`: Manages rendering tasks, user interactions, and Material Design components.
- `logic.js`: Core app logic (add, edit, delete, filter, etc.), connects UI and storage.

## 2. Core Features & Data Model
- Each task:
  - `id` (unique)
  - `text` (string)
  - `completed` (boolean)
  - `dueDate` (optional)
  - `priority` (optional: low/medium/high)
- Features:
  - Add, edit, delete tasks
  - Mark complete/incomplete
  - Filter/search by text, status, priority
  - Set due date/priority
  - Persist tasks in localStorage

## 3. UI & User Experience
- Material Design look using Material CSS (e.g., Materialize, MUI CSS, or Google’s Material Web)
- Responsive layout: works on desktop and mobile
- Task list with checkboxes, edit/delete icons, and color-coded priorities
- Add/edit form with fields for text, due date, and priority
- Filter/search bar at the top
- All changes update instantly and persist automatically
