import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "../cart/Cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  return (
    <div>
      <h1>Estoy en el carrito</h1>
      {cart.map((product) => (
        <div key={product.id} className="divCarrito">
          <h2>{product.title}</h2>
          <h2>{product.price}</h2>
          <h3>Cantidad: {product.quantity}</h3>
          <Button
            variant="outlined"
            onClick={() => deleteProductById(product.id)}
          >
            Eliminar
          </Button>
        </div>
      ))}

      <h2>El total a pagar es: {total}</h2>

      <Link to="/checkout">
        <Button variant="contained">Finalizar Compra</Button>
      </Link>
      <Button variant="contained" onClick={clearCart}>
        Vaciar Carrito
      </Button>
    </div>
  );
};

export default Cart;
