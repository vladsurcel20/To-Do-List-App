    document.addEventListener("DOMContentLoaded", function() {
      const form = document.getElementById("new-task-form");
      const input = document.querySelector(".new-task-input");
      const tasksContainer = document.querySelector(".current-tasks");
      let isActive;

  
      form.addEventListener("submit", function(event) {
          event.preventDefault();
          const taskText = input.value.trim();
  
          if (taskText !== "") {
              const taskElement = document.createElement("div");
              taskElement.classList.add("user-task");
  
              const circleIcon = document.createElement("i");
              circleIcon.classList.add("fa-regular", "fa-circle");

              function updateIcon() {
                circleIcon.classList = isActive ? "fa-solid fa-circle-check" : "fa-regular fa-circle";
            }
              circleIcon.addEventListener("click", function() {
                  // Logic pentru marcarea ca finalizată
                  taskElement.classList.toggle("active");
                  isActive = taskElement.classList.contains("active");
                  taskTextElement.classList.toggle("checked");
                  updateIcon();
              });
  
              const taskTextElement = document.createElement("p");
              taskTextElement.textContent = taskText;
  
              const xMarkIcon = document.createElement("i");
              xMarkIcon.classList.add("fa-solid", "fa-xmark");
              xMarkIcon.addEventListener("click", function() {
                  // Logic pentru ștergere
                  tasksContainer.removeChild(taskElement);
              });
  
              taskElement.appendChild(circleIcon);
              taskElement.appendChild(taskTextElement);
              taskElement.appendChild(xMarkIcon);
  
              tasksContainer.appendChild(taskElement);
  
              input.value = "";
          }
      });
  });

  
