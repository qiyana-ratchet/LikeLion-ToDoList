// Add task
document.querySelector(".app-insert input").addEventListener(
  "keyup",
  function (event) {
    if (event.keyCode === 13 && this.value !== "") {
      addTask(this.value);
      this.value = "";
    }
  },
  false
);

document.querySelector(".app-list").addEventListener(
  "click",
  function (event) {
    // Remove task
    if (event.target.classList.contains("remove-task")) {
      removeTask(event.target.parentNode);

      // Complete Task
    } else if (event.target.classList.contains("task")) {
      completeTask(event.target);
    }
  },
  false
);


function addTask(task) {
  var new_task = document.createElement("li");
  new_task.setAttribute("class", "task");
  new_task.innerHTML =
    task + '<a href="javascript:;" class="remove-task">remove</a>';

  var $list = document.querySelector(".app-list ul");
  $list.appendChild(new_task);
}

function removeTask(task) {
  task.style.opacity = 0;
  setTimeout(function () {
    task.remove();
  }, 400);
}

function completeTask(task) {
  task.classList.toggle("task-complete");
}
