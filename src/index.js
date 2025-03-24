document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //first we select the document objects we want to manipulate

  const form = document.getElementById("create-task-form");
  const tasks = document.getElementById("tasks");

  //priosrity selector dropdwown menu
  const prioritySelector = document.createElement("select");
  prioritySelector.id = "taskPriority";
  const priorities = ["High", "Medium", "Low"];
  priorities.forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority;
    option.textContent = priority;
    prioritySelector.appendChild(option);
  });

  form.insertBefore(prioritySelector, form.lastElementChild);

  //next we add the event listener for the submit button on the form

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    //required mothod to prevent page being reloaded
    // after submit button is pressed

    const newTask = document.getElementById("new-task-description");
    const taskText = newTask.value.trim();
    // this a new method removes spaces before and after
    // taskText and prevents blank spaces from being added to the task list
    if (taskText !== "") {
      addTaskToList(taskText);
      newTask.value = "";
    }
    // this part will leave the form blank after submit button is pressed
  });

  function addTaskToList(task) {
    //create a new element in the HTML
    const listItem = document.createElement("li");
    listItem.textContent = task;
    const priority = document.getElementById("taskPriority").value;
    listItem.style.color = getPriorityColor(priority);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", function () {
      listItem.remove();
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.addEventListener("click", function () {
      const editTask = prompt("Edit your task:", task);
      if (editTask !== null && editTask.trim() !== "") {
        listItem.textContent = editTask.trim();
        listItem.style.color = getPriorityColor(priority);
        listItem.appendChild(editBtn);
        listItem.prepend(deleteBtn);
      }
    });

    listItem.appendChild(editBtn);
    listItem.prepend(deleteBtn);
    tasks.appendChild(listItem);
  }

  function getPriorityColor(priority) {
    switch (priority) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "green";
      default:
        return "black";
    }
  }
});
