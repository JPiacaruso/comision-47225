import { useState, useEffect } from "react";
import CounterPresentacional from "./counterPresentacional";

const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);
  const [nombre, setNombre] = useState("pepito");

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Cantidad Máxima");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <CounterPresentacional
      sumar={sumar}
      restar={restar}
      contador={contador}
      nombre={nombre}
      setNombre={setNombre}
      onAdd={onAdd}
    />
  );
};

export default CounterContainer;
