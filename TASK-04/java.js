document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    loadNotes();
  });
  
  function switchTab(tabName) {
    document.getElementById('todoTab').classList.remove('active');
    document.getElementById('notesTab').classList.remove('active');
    document.getElementById(`${tabName}Tab`).classList.add('active');
  }
  function addTask() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    if (task) {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      input.value = '';
      loadTasks();
    }
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    tasks.forEach((task, index) => {
      list.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">X</button></li>`;
    });
  }
  
  function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  function addNote() {
    const noteInput = document.getElementById('noteInput');
    const note = noteInput.value.trim();
    if (note) {
      const notes = JSON.parse(localStorage.getItem('notes')) || [];
      notes.push(note);
      localStorage.setItem('notes', JSON.stringify(notes));
      noteInput.value = '';
      loadNotes();
    }
  }
  
  function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const list = document.getElementById('noteList');
    list.innerHTML = '';
    notes.forEach((note, index) => {
      list.innerHTML += `<li>${note} <button onclick="deleteNote(${index})">X</button></li>`;
    });
  }
  
  function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    loadNotes();
  }
  