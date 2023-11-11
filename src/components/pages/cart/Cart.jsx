import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { Image } from "mui-image";
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
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Carrito no eliminado", "", "info");
      }
    });
  };

  return (
    <>
      <Grid
        container
        fullWidth
        display={"flex"}
        justifyContent={"space-around"}
      >
        <Grid item xs={12} md={8}>
          {cart.map((product) => (
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                margin: "1rem",
                boxShadow: "3",
                backgroundColor: "#CC646A",
              }}
            >
              <Box height="150" key={product.id} className="divCarrito">
                <img
                  src={product.img}
                  alt={product.title}
                  height={150}
                  width={150}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "Center",
                  alignItems: "flex-start",
                  padding: "2rem",
                  height: "150px",
                }}
              >
                <Typography variant="h5">{product.title}</Typography>
              </Box>
              <Grid
                item
                xs={12}
                md={8}
                display={"flex"}
                justifyContent={"flex-end"}
              >
                <Box>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography
                      variant="h7"
                      sx={{
                        borderRadius: 1,
                        marginTop: "80%",
                      }}
                    >
                      Cantidad: {product.quantity}
                    </Typography>
                    <Typography
                      variant="h6"
                      bgcolor={"white"}
                      textAlign="center"
                      borderRadius={1}
                    >
                      {product.price}
                    </Typography>
                  </Box>
                  <IconButton onClick={() => deleteProductById(product.id)}>
                    <DeleteIcon fontSize="large" color="primary.main" />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          xs={7}
          md={3}
          boxShadow={1}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          margin={2}
          borderRadius={5}
          backgroundColor={"secondary.main"}
        >
          {cart.length > 0 && (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              marginTop={1}
            >
              <Image
                src="https://res.cloudinary.com/dwxhsdpc7/image/upload/v1699664543/jessica-ruscello-G8vPQ-XVxxY-unsplash_nhqpap_iacruq.png"
                height={"250px"}
                width={"150px"}
              />
              <Box
                display={"flex"}
                flexDirection={"column-reverse"}
                borderTop={0.5}
                borderBottom={0.5}
                sx={{
                  height: 1 / 2,
                }}
                marginTop={1}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography variant="h6">
                    El total a pagar es: $ {total}
                  </Typography>
                  <Link to="/checkout">
                    <Button variant="contained" size="small" fullWidth>
                      Finalizar Compra
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={clearCartAlert}
                  >
                    Vaciar Carrito
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
