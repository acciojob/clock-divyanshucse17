// script.js

function updateTimer() {
  const timerElement = document.getElementById("timer");

  // Get current date & time
  const now = new Date();

  // Format date & time as a string
  const dateTimeString = now.toLocaleString(); 

  // Display inside <p> tag
  timerElement.textContent = dateTimeString;
}

// Run immediately once
updateTimer();

// Update every 1 second
setInterval(updateTimer, 1000);
