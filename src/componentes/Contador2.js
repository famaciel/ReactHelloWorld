import React, { useState } from "react";
import Botao from "./Botao";

const Contador2 = () => {
  const [count, setCount] = useState(0);

  const diminuiUm = () => {
    setCount(count - 1);
  };

  const somaUm = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Botao funcaoQuandoClicar={diminuiUm}>-</Botao>
      <span>{count}</span>
      <Botao funcaoQuandoClicar={somaUm}>+</Botao>
    </div>
  );
};

export default Contador2;
