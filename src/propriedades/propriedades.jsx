import React from "react";
import Form from "./Form";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default App;
