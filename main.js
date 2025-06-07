
let entradas = 0;
let saidas = 0;
dados = [];
//apresentasao
const entrada = document.querySelector("#entrada");
const saida = document.querySelector("#saida");
const tot = document.querySelector("#total");
//compos de entrada
const descricao = document.querySelector("#descricao");
const valor = document.querySelector("#valor");
const tipo = document.querySelector("#tipo");
const incluir = document.querySelector("#btn-incluir");
const form = document.querySelector("form");
const table = document.querySelector("#inserir_tabela");
form.addEventListener("submit", controle_financeiro);

function controle_financeiro(e) {
  e.preventDefault();
  let valores = {
    descr: !descricao.value ? "Sem descrição": descricao.value,
    valor: parseInt(valor.value),
    tipo: tipo.value
  };

  if (valores.tipo == "Saida") {
    if (saidas >= entradas) {
      alert("as entradas não podem ser maior que as saidas");
      return;
    }
    saidas += valores.valor;
    saida.innerHTML = saidas.toLocaleString("pt-ao", {
      maximumFractionDigits: 2,
    });
    tot.innerHTML = (entradas - saidas).toLocaleString("pt-ao", {
      maximumFractionDigits: 2,
    });
    dados.push(valores);
    criar_registro();
  }
  if (valores.tipo == "Entrada") {
    entradas += valores.valor;
    entrada.innerHTML = entradas.toLocaleString("pt-ao", {
      maximumFractionDigits: 2,
    });
    tot.innerHTML = (entradas - saidas).toLocaleString("pt-ao", {
      maximumFractionDigits: 2,
    });
    dados.push(valores);
    criar_registro();
  }
  console.log(valores);
  console.log(dados)
}
document.querySelector(".excluir").addEventListener("click",(event)=>{
  if(event.target.classList.contains("excluir")){
    event.target.closest(".item").remove();
    
  }console.log("excluir")
})

function criar_registro() {
  table.innerHTML=""
  dados.forEach((dado) => {
    table.innerHTML+= `
    <tr class="item">
    <td>${dado.descr}</td>
    <td>${dado.valor}</td>
    <td>${dado.tipo}</td>
    <td><button class="excluir">Excluir</button></td>
    </tr>
    `;
  });
}