import React from "react";

const App = () => {
  function handleClick(event) {
    console.log(event.target);
  }
  return <button onClick={(event) => alert(event.target)}>Clique</button>;
};

export default App;
