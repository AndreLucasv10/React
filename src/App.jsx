import React from "react";

function App() {
  const random = Math.random();
  const titulo = <h1>esse é um titulo</h1>;
  const ativo = true;

  function mostrarNome(sobrenome) {
    return "André" + sobrenome;
  }

  const carro = {
    marca: "Ford",
    rodas: "4",
  };
  const estiloP = {
    color: "blue",
    fontSize: "2rem",
  };
  return (
    <>
      {titulo}
      <p>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p></p>
      <p>{mostrarNome(" lucas")}</p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p style={estiloP} className={ativo ? "ativo" : "inativo"}>
        {random * 100}
      </p>
    </>
  );
}

export default App;
