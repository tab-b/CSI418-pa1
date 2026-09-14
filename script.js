const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskName = taskInput.value.trim();
    const taskPriority = prioritySelect.value;

      if(taskName === "") {
        return;
    }

    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item", taskPriority);

    const taskDescription = document.createElement("span");
    taskDescription.textContent = taskName;

    const priorityLabel = document.createElement("span");
    priorityLabel.textContent = taskPriority;
    priorityLabel.classList.add("priority-label");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", function () {
        taskItem.remove();
    });

    taskItem.append(taskDescription, priorityLabel, deleteButton);
    taskList.appendChild(taskItem);

    taskForm.reset();
    taskInput.focus();

});