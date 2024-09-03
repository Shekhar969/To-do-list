document.addEventListener("DOMContentLoaded", () => {
  let userInput = document.getElementById("userInput");
  let addBtn = document.getElementById("Submit");
  let taskContainer = document.getElementById("taskContainer");
  let taskPara = taskContainer.querySelector("#Tasks");
  let delBtn = taskContainer.querySelector("#Delete");
  let hidden =document.querySelector(".hidden")

    addBtn.addEventListener("click", () => {
        hidden.style.display='none';
        if (userInput.value.trim() !== "") { // Check if input is not empty
            let newTask = document.createElement("p"); // Create a new paragraph element for the task
            newTask.textContent = userInput.value; // Set text content to user input
            taskPara.appendChild(newTask); // Add the new task to the task container
            userInput.value = ""; // Clear the input field after adding the task
        }
    });

    delBtn.addEventListener("click", () => {
        taskPara.innerHTML = "is it printing ra"; 
    });
    
});