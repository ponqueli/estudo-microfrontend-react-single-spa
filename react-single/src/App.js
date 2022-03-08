import React, { useState } from "react";

const App = ({ name }) => {
    const [counter, updateCounter] = useState(0);

    const handleChange = type =>{
        updateCounter(oldCounter => oldCounter + type)
    }

  return (
  <>
    <h1>{name}</h1>
    <h3>Counter: {counter}</h3>
    <button onClick={()=>handleChange(-1)}>Decrementar</button>
    <button onClick={()=>handleChange(1)}>Incrementar</button>
  </>
  );
};

export default App;