import React from "react";

const App = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(["Item 1"]);

  function handleClick() {
    setContar((contar) => {
      setItems((items) => [...items, "item" + (contar + 1)]);
      return contar + 1;
    });
  }

  return (
    <div>
      {items.map((items) => {
        return <li key={items}>{items}</li>;
      })}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;
