document.addEventListener('DOMContentLoaded', function() {
  // Obtener referencias a elementos del DOM
  const taskInput = document.getElementById('taskInput');
  const startDateInput = document.getElementById('startDateInput');
  const startTimeInput = document.getElementById('startTimeInput');
  const dueDateInput = document.getElementById('dueDateInput');
  const dueTimeInput = document.getElementById('dueTimeInput');
  const taskList = document.getElementById('taskList');
  const allTasksBtn = document.getElementById('allTasks');
  const activeTasksBtn = document.getElementById('activeTasks');
  const completedTasksBtn = document.getElementById('completedTasks');
  const clearCompletedBtn = document.getElementById('clearCompleted');

  // Obtener tareas guardadas en el almacenamiento local o inicializar una lista vacía
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Función para guardar tareas en el almacenamiento local
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Función para renderizar las tareas en la lista
  function renderTasks(filter = 'all') {
    taskList.innerHTML = '';
    const filteredTasks = filterTasks(filter);

    filteredTasks.forEach(function(task, index) {
      const li = document.createElement('li');
      // Crear elementos HTML para cada tarea y asignarles eventos
      li.innerHTML = `
        <span>${task.text}</span>
        <span class="dates">${task.startDate ? 'Inicio: ' + task.startDate + ' ' + task.startTime : ''} | ${task.dueDate ? 'Entrega: ' + task.dueDate + ' ' + task.dueTime : ''}</span>
        <button class="edit-btn">Editar</button>
        <button class="delete-btn">Borrar</button>
      `;
      if (task.completed) {
        li.classList.add('completed');
      }

      const editButton = li.querySelector('.edit-btn');
      // Evento para editar una tarea
      editButton.addEventListener('click', function() {
        const newText = prompt('Editar tarea:', task.text);
        if (newText !== null) {
          tasks[index].text = newText;
          saveTasks();
          renderTasks(filter);
        }
      });

      const deleteButton = li.querySelector('.delete-btn');
      // Evento para eliminar una tarea
      deleteButton.addEventListener('click', function() {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks(filter);
      });

      // Evento para marcar una tarea como completada o incompleta
      li.addEventListener('click', function() {
        task.completed = !task.completed;
        saveTasks();
        renderTasks(filter);
      });

      taskList.appendChild(li);
    });
  }

  // Función para filtrar las tareas según el estado
  function filterTasks(filter) {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }

  // Función para limpiar las tareas completadas
  function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    renderTasks();
  }

  // Evento para agregar una tarea cuando se presiona Enter en el campo de entrada
  taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && taskInput.value.trim() !== '') {
      const startDate = startDateInput.value.trim();
      const startTime = startTimeInput.value.trim();
      const dueDate = dueDateInput.value.trim();
      const dueTime = dueTimeInput.value.trim();
      
      // Validación de fechas
      if (startDate !== '' && dueDate !== '' && startDate > dueDate) {
        alert('La fecha de inicio no puede ser posterior a la fecha de entrega.');
        return;
      }

      // Agregar la tarea a la lista y renderizar las tareas
      tasks.push({ 
        text: taskInput.value.trim(), 
        startDate: startDate, 
        startTime: startTime, 
        dueDate: dueDate, 
        dueTime: dueTime, 
        completed: false 
      });
      saveTasks();
      renderTasks();
      // Limpiar los campos de entrada después de agregar la tarea
      taskInput.value = '';
      startDateInput.value = '';
      startTimeInput.value = '';
      dueDateInput.value = '';
      dueTimeInput.value = '';
    }
  });

  // Eventos para mostrar las tareas según su estado
  allTasksBtn.addEventListener('click', function() {
    renderTasks('all');
  });

  activeTasksBtn.addEventListener('click', function() {
    renderTasks('active');
  });

  completedTasksBtn.addEventListener('click', function() {
    renderTasks('completed');
  });

  // Evento para limpiar las tareas completadas
  clearCompletedBtn.addEventListener('click', function() {
    clearCompletedTasks();
  });

  // Renderizar las tareas al cargar la página
  renderTasks();
});
