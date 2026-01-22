// inicial implementação
const body = document.body;
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const amPmElement = document.getElementById("ampm");

// controls
const toggleFormatElement = document.getElementById("toggle-format");
const toggleThemeElement = document.getElementById("toggle-theme");

let is24h = localStorage.getItem("format") === "24";
let isDarkMode = false;

function updateTimer() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  let ampm = "";

  if (!is24h) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  hours = String(hours).padStart(2, "0");

  timeElement.textContent = `${hours} : ${minutes} : ${seconds}`;
  amPmElement.textContent = ampm;

  const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  dateElement.textContent = `${days[now.getDay()]}, ${now.getDate()} de ${
    months[now.getMonth()]
  } de ${now.getFullYear()}`;
}

// Alternar formato AM PM
toggleFormatElement.addEventListener("click", () => {
  is24h = !is24h;
  localStorage.setItem("format", is24h ? "24" : "12");
  toggleFormatElement.textContent = `Formato ${is24Hour ? "24h" : "12h"}`;
});

toggleThemeElement.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  body.classList.toggle("dark", isDarkMode);
  toggleThemeElement.textContent = isDarkMode
    ? "☀️ Modo Claro"
    : "🌙 Modo Escuro";
});

setInterval(updateClock, 1000);