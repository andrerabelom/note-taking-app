//1. Adicionar tarefa
//Pegar o valor digitado pelo usuário
const inputTarefa = document.getElementById("nova-tarefa")

// Criar função para adicionar tarefa
const adicionarTarefa = () => {
  // Função data e horário

  var today = new Date();


  var dataAtual = today.getDate();
  var mesAtual = today.getMonth()+1
  
  
  dataAtual = (dataAtual < 10 ? "0" : "") + dataAtual;
  mesAtual = (mesAtual < 10 ? "0" : "") + mesAtual;
  
  
  
  
 
  var minutoAtual = today.getMinutes();
  var segundoAtual = today.getSeconds();
  var horaAtual = today.getHours();
   
  minutoAtual = (minutoAtual < 10 ? "0" : "") + minutoAtual;
  segundoAtual = (segundoAtual < 10 ? "0" : "") + segundoAtual;
  horaAtual = (horaAtual < 10 ? "0" : "") + horaAtual;
  
  
    var time = horaAtual+':'+minutoAtual+':'+segundoAtual;
    var date = dataAtual+'-'+mesAtual+'-'+today.getFullYear();
  
    // Criar elemento li
  const item = document.createElement("li") // <li> </li>
  
  // Adicionar texto digitado no elemento
  item.innerHTML = `
    <span class="relogio"> Data: ${date} / Horário: ${time} </span>
    <button class="tarefa-ok">OK</button>
    <span>${inputTarefa.value}</span>
    <button class="excluir">X</button>
  `
  //Pega a lista de tarefas
  const lista = document.getElementById("listaPai")
  
  // Adicionar elemento na lista de tarefas
  if (inputTarefa.value.length > 0) {
  lista.appendChild(item)
  }

  
  // Limpa o valor digitado pelo usuário
  inputTarefa.value = ""

  inputTarefa.focus();
}

// Adiciona o envento de click no botão adicionar
// Quando clica você executa a funçao adicionarTarefa
document.getElementById("botaoAdicionar").addEventListener("click", adicionarTarefa) 


// 2. Limpar lista
// Pega botão Limpar
const botaoLimpar = document.getElementById("botaoApagar");

// Adiciona o envento de click no botão limpar
// Quando clica você executa a funçao definida na function
botaoLimpar.addEventListener("click", function (event){
  const lista = document.getElementById("listaPai")
  lista.innerHTML = "";


} )


//Marcar tarefa como concluida e excluir tarefa ao clicar no botaoLimpar

document.addEventListener("click", (e) => {


const targetEl = e.target;
const parentEl = targetEl.closest("li");


if(targetEl.classList.contains("tarefa-ok")){

parentEl.classList.toggle("done");

}

if(targetEl.classList.contains("excluir")) {

    parentEl.remove();

}


})

//Para casa: 
// 3. Marcar tarefa como concluída
// 4. Excluir tarefa ao clicar no botão

