import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Container,
  CardContent,
  Card,
} from "@mui/material";
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
    apellido: "",
  });

  const [orderId, setOrderId] = useState(null); // Inicialmente, orderId es null

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    console.log("Entrando en handleSubmit");

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => {
      console.log("Orden agregada:", res);
      setOrderId(res.id);
      cart.forEach((elemento) => {
        let refDoc = doc(db, "products", elemento.id);
        updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
      });
      clearCart();
    });
  };

  return (
    <>
      {orderId ? (
        <div>
          <h2>Gracias por su compra, su Nº de comprobante es {orderId}</h2>
          <Link to="/">Seguir Comprando</Link>
        </div>
      ) : (
        <Container fullWidth>
          <Typography gutterBottom variant="h5" align="center" margin={4}>
            Formulario de Compra
          </Typography>
          <Card
            style={{
              maxWidth: 450,
              margin: "0 auto",
              padding: "20px 5px",
              marginBottom: "40px",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5">
                Registro
              </Typography>
              <Typography variant="body2" component="p" color="textSecondary">
                Rellene el formulario.
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      type="text"
                      label="Nombre"
                      variant="outlined"
                      placeholder="Ingresa tu nombre"
                      name="name"
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      type="text"
                      label="Apellido"
                      variant="outlined"
                      placeholder="Ingresa tu Apellido"
                      name="apellido"
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      type="number"
                      label="Telefono"
                      variant="outlined"
                      placeholder="Ingresa Tu teléfono"
                      name="phone"
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      type="email"
                      label="Email"
                      variant="outlined"
                      placeholder="Ingresa Tu email"
                      name="email"
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Button variant="outlined" type="submit" fullWidth>
                      Comprar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Container>
      )}
    </>
  );
};

export default CheckoutOficial;
