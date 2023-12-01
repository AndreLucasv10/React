import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Form from "../Form/Form.jsx";

const Teste = () => {
  const active = false;

  if (active) {
    return <p>teste</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <div>
      App
      <Teste />
      <Header />
      <Footer />
      <Form />
    </div>
  );
};

export default App;
