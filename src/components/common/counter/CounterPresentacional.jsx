const CounterPresentacional = ({ sumar, restar, contador, onAdd }) => {
  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <button>{contador}</button>
      <button onClick={restar}>Restar</button>
      <button onClick={() => onAdd(contador)}>Agregar al Carrito</button>
    </div>
  );
};

export default CounterPresentacional;
