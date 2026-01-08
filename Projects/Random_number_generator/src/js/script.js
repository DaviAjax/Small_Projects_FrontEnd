// inputs
const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
// buttons
const btnGenerate = document.getElementById("btn-Generate");
const btnClear = document.getElementById("btn-Clear");
//Current number
const currentContainer = document.querySelector(".CurrentNum");
const currentNum = document.getElementById("currentNum");
// history container
const historyContainer = document.querySelector(".history");
const genHistory = document.querySelector(".genHistory");
const noHistory = document.querySelector(".noHistory");
const amount = document.getElementById("amount");


btnGenerate.addEventListener("click", () => {
  const min = Number(minInput.value);
  const max = Number(maxInput.value);

  if(minInput.value === "" || maxInput.value === ""){
    alert("preencha os campos");
    return;
  }

  if(min >= max){
    alert("O numero mínimor deve ser menor que o Máximo.");
    return;
  }

  const numberGenerated = Math.floor(Math.random() * (max - min + 1) + min)

  currentNum.textContent = numberGenerated;

  currentContainer.style.display = "block";
  historyContainer.style.display = "block";
  noHistory.style.display = "none";

})

