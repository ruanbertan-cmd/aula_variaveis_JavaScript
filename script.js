function adicionarTarefa() {
  
  let inputTarefa = document.getElementById("inputTarefa")
  let tarefa = inputTarefa.value
  ///document.getElementById("mensagem").textContent = tarefa;

  let listaTarefas = document.getElementById("listaTarefas")
  let novaTarefa = document.createElement("li")

  if (tarefa === "") {
    inputTarefa.setAttribute("placeholder", "Por favor, digite uma tarefa para darmos continuidade!")
  } else {
    inputTarefa.setAttribute("placeholder", "Digite a sua tarefa!")
    listaTarefas.appendChild(novaTarefa)
    novaTarefa.textContent = tarefa
  }

  let removerTarefa = document.createElement("button")
  removerTarefa.textContent = "Remover"
  novaTarefa.appendChild(removerTarefa)

  removerTarefa.onclick = function() {
    listaTarefas.removeChild(novaTarefa)
  }

  inputTarefa.value = ""

}