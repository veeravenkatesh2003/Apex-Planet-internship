document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (!name.value || !email.value || !message.value) {
      formMessage.textContent = "All fields are required.";
      formMessage.style.color = "red";
      return;
    }
  
    if (!email.value.match(emailPattern)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "red";
      return;
    }
  
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
  
    // Clear the form
    name.value = "";
    email.value = "";
    message.value = "";
  });
  
  // To-Do List
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") return;
  
    const li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  
  function removeTask(button) {
    button.parentElement.remove();
  }
  