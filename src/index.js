document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //first we select the document objects we want to manipulate

  const form = document.getElementById("create-task-form");
  const tasks = document.getElementById("tasks");

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

    tasks.appendChild(listItem);
  }
});
