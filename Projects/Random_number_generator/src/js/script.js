function gerarNumero() {
  const minInput = document.getElementById("min");
  const maxInput = document.getElementById("max");
  const resultado = document.getElementById("resultado");
  const historico = document.getElementById("historico");

  const min = Number(minInput.value);
  const max = Number(maxInput.value);

  // 🔒 Impedir campos vazios
  if (minInput.value === "" || maxInput.value === "") {
    resultado.innerText = "Preencha todos os campos.";
    return;
  }

  // 🔒 Validar intervalo
  if (min >= max) {
    resultado.innerText = "O número mínimo deve ser menor que o máximo.";
    return;
  }

  // 🎲 Gerar número aleatório
  const numero = Math.floor(Math.random() * (max - min + 1)) + min;

  // 📢 Mostrar resultado
  resultado.innerText = `Número gerado: ${numero}`;

  // 📝 Salvar no histórico
  const item = document.createElement("li");
  item.innerText = numero;
  historico.appendChild(item);
}

// 🧹 Limpar tudo
function limpar() {
  document.getElementById("min").value = "";
  document.getElementById("max").value = "";
  document.getElementById("resultado").innerText = "";
  document.getElementById("historico").innerHTML = "";
}
