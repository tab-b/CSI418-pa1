const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority");
const taskList = document.getElementById("task-list");

const tasks = [];

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskName = taskInput.value.trim();
    const taskPriority = prioritySelect.value;

      if(taskName === "") {
        return;
    }

    const newTask = {
        name: taskName,
        priority: taskPriority,
        completed: false
    }
    tasks.push(newTask);
    displayTasks();

    taskForm.reset();
    taskInput.focus();
});

function displayTasks() {
    taskList.innerHTML = "";

    for(let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item", task.priority);

        if(task.completed) {
            taskItem.classList.add("completed");
        }

        const taskDescription = document.createElement("span");
        taskDescription.textContent = task.name;
        taskDescription.classList.add("task-description");

        const taskPrioritySelect = document.createElement("select");
        taskPrioritySelect.classList.add("task-priority");

        const lowOption = document.createElement("option");
        lowOption.value = "low";
        lowOption.textContent = "Low";

        const mediumOption = document.createElement("option");
        mediumOption.value = "medium";
        mediumOption.textContent = "Medium";

        const highOption = document.createElement("option");
        highOption.value = "high";
        highOption.textContent = "High";

        taskPrioritySelect.append(lowOption, mediumOption, highOption);
        taskPrioritySelect.value = task.priority;

        taskPrioritySelect.addEventListener("change", function () {
            task.priority = taskPrioritySelect.value;
            displayTasks();
        });

        const completedButton = document.createElement("button");
        completedButton.type = "button";

        if(task.completed) {
            completedButton.textContent = "Not complete";
        } else {
            completedButton.textContent = "Complete";
        }

        completedButton.addEventListener("click", function () {
            task.completed = !task.completed;
            displayTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            displayTasks();
        });

        taskItem.append(
            taskDescription,
            taskPrioritySelect,
            completedButton,
            deleteButton
        );
        taskList.appendChild(taskItem);
    }
}