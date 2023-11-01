import { Button, Icon, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "../cart/Cart.css";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartAlert = () => {
    Swal.fire({
      title: "Desea eliminar el Carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar Carrito",
      denyButtonText: `No eliminar Carrito`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Carrito no eliminado", "", "info");
      }
    });
  };

  return (
    <div>
      <h1>Estoy en el carrito</h1>
      {cart.map((product) => (
        <div key={product.id} className="divCarrito">
          <img src={product.img} alt={product.title} height={120} width={140} />
          <h2>{product.title}</h2>
          <h2>{product.price}</h2>
          <h3>Cantidad: {product.quantity}</h3>
          <IconButton onClick={() => deleteProductById(product.id)}>
            <DeleteIcon color="primary" />
          </IconButton>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <h2>El total a pagar es: {total}</h2>

          <Link to="/checkout">
            <Button variant="contained">Finalizar Compra</Button>
          </Link>
          <Button variant="contained" onClick={clearCartAlert}>
            Vaciar Carrito
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
