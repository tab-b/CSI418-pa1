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

    const lowOption = document.createElement("option");
    lowOption.value = "low";
    lowOption.textContent = "Low";

    const mediumOption = document.createElement("option");
    mediumOption.value = "medium";
    mediumOption.textContent = "Medium";

    const highOption = document.createElement("option");
    highOption.value = "high";
    highOption.textContent = "High";

    const taskPrioritySelect = document.createElement("select");
    taskPrioritySelect.classList.add("task-priority");

    taskPrioritySelect.append(lowOption, mediumOption, highOption);

    // Show the priority chosen when the task was created.
    taskPrioritySelect.value = taskPriority;

    const completedButton = document.createElement("button");
    completedButton.type = "button";
    completedButton.textContent = "Complete";

    completedButton.addEventListener("click", function () {
        const isCompleted = taskItem.classList.toggle("completed");

        if(isCompleted) {
        completedButton.textContent = "Not complete";
        } else{
        completedButton.textContent = "Complete";
        }
    });

    taskPrioritySelect.addEventListener("change", function () {
        const oldPriority = taskPrioritySelect.dataset.priority;
        const newPriority = taskPrioritySelect.value;

        taskItem.classList.remove(oldPriority);
        taskItem.classList.add(newPriority);

        taskPrioritySelect.dataset.priority = newPriority;
    });

    taskPrioritySelect.addEventListener("change", function () {
        taskItem.classList.remove("low", "medium", "high");
        taskItem.classList.add(taskPrioritySelect.value);
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        taskItem.remove();
    });

    taskItem.append(
        taskDescription,
        taskPrioritySelect,
        completedButton,
        deleteButton
    );

    taskList.appendChild(taskItem);

    taskForm.reset();
    taskInput.focus();

});