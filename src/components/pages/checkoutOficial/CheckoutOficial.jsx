import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  collection,
  updateDoc,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckoutOficial = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null); // Inicialmente, orderId es null

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      let refDoc = doc(db, "products", elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });

    clearCart();
  };

  return (
    <>
      {orderId ? (
        <div>
          <h2>Gracias por su compra, su Nº de comprobante es {orderId}</h2>
          <Link to="/">Seguir Comprando</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingresa Tu nombre"
            name="name"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            placeholder="Ingresa Tu teléfono"
            name="phone"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            placeholder="Ingresa Tu email"
            name="email"
            onChange={handleChange}
          ></input>
          <button type="submit">Comprar</button>
        </form>
      )}
    </>
  );
};

export default CheckoutOficial;
