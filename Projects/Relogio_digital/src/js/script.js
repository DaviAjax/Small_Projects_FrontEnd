// inicial implementação
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const amPmElement = document.getElementById("ampm");

// controls
const toggleFormatElement = document.getElementById("toggle-format");
const toggleThemeElement = document.getElementById("toggle-theme");

function updateTimer() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  console.log(hours, minutes, seconds)
}

setInterval(updateTimer, 1000);
