import React from "react";
import Links from "../../links";
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];
const Produtos = () => {
  return (
    <section>
      <Links />
      <h1 style={{ color: "green" }}>Produtos</h1>
      <div>
        {produtos.map(({ nome, propriedades }) => {
          return (
            <div style={{ border: "1px solid black", padding: "16px" }}>
              <p key={nome}>{nome}</p>
              <ul>
                <li>{propriedades[0]}</li>
                <li>{propriedades[1]}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Produtos;
