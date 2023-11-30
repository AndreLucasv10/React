import React from "react";
// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const styleP = {
  fontWeight: "bold",
};

const styleAtivo = {
  color: "green",
  fontWeight: "bold",
};
const styleInativo = {
  color: "red",
  fontWeight: "bold",
};
const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const active = luana.ativa;

if (active) {
} else {
}

const App = () => {
  const dados = mario;
  let valores = 0;
  function totalPreco(compras) {
    compras.forEach((i) => {
      const resultado = i.preco.split("R$")[1]++;
      valores += resultado;
    });
  }
  totalPreco(dados.compras);
  return (
    <div>
      <p style={styleP}>Nome: {dados.cliente}</p>
      <p style={styleP}>Idade: {dados.idade}</p>
      <p style={styleP}>
        situação:
        <span style={dados.ativa ? styleAtivo : styleInativo}>
          {dados.ativa ? " ativo" : " inativo"}
        </span>
      </p>
      <p style={styleP}>Total gasto: R$ {" " + valores}</p>
      {valores > 10000 && <p style={styleP}>você está gastando muito!</p>}
    </div>
  );
};
export default App;
