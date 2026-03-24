let tasks = [];

// Add a new task
function addTask() {
  const InputTask = document.getElementById("InputTask");
  let task = InputTask.value.trim();
  const message = document.getElementById("message");

  if (task === "") {
    // Show error if input is empty
    message.textContent = "Write some task before ;(";
    message.style.color = "darkred";
    setTimeout(() => { message.textContent = ""; }, 1900);
  } else {
    // Add task and show success message
    message.textContent = "Task added successfully :D";
    message.style.color = "darkgreen";
    tasks.push(task);
    renderTask();
    setTimeout(() => { message.textContent = ""; }, 1900);
  }

  InputTask.value = ""; // Clear input field
}

// Display tasks in the HTML list
function renderTask() {
  const listTask = document.getElementById("listTask");
  listTask.innerHTML = ""; // Clear the list

  tasks.forEach((task, i) => {
    let newTask = document.createElement("li");

    // Span for task text (clickable to edit)
    let taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.style.cursor = "pointer";

    // Inline editing
    taskText.onclick = () => {
      let editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = task;
      editInput.placeholder = "Editing...";

      // Add class for visual highlight
      newTask.classList.add("editing");

      // Save on Enter or blur
      editInput.onblur = () => saveEdit(i, editInput.value, newTask);
      editInput.onkeydown = (e) => {
        if (e.key === "Enter") saveEdit(i, editInput.value, newTask);
      };

      newTask.replaceChild(editInput, taskText);
      editInput.focus();
    };

    newTask.appendChild(taskText);

    // Remove button
    let buttonRemove = document.createElement("button");
    buttonRemove.className = "remove";
    buttonRemove.textContent = "Remove";
    buttonRemove.onclick = () => removeTask(i);
    newTask.appendChild(buttonRemove);

    listTask.appendChild(newTask);
  });
}

// Save edited task
function saveEdit(i, newValue, liElement) {
  if (newValue.trim() !== "") {
    tasks[i] = newValue.trim();
  }
  liElement.classList.remove("editing"); // remove highlight
  renderTask(); // Re-render list
}

// Remove a task
function removeTask(i) {
  tasks.splice(i, 1);
  renderTask();
}

// Clear all tasks
function cleanList() {
  tasks.length = 0;
  renderTask();
  const message = document.getElementById("message");
  message.textContent = "List successfully cleaned";
  setTimeout(() => { message.textContent = ""; }, 1900);
}
