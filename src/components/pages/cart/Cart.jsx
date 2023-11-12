import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { Image } from "mui-image";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "../cart/Cart.css";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);
  const navigate = useNavigate();

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
        navigate("/");
      } else if (result.isDenied) {
        Swal.fire("Carrito no eliminado", "", "info");
      }
    });
  };

  return (
    <>
      {cart.length === 0 ? (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h5" align="center" style={{ marginTop: 10 }}>
            Sin productos en el carrito
          </Typography>
          <Button variant="outlined" size="small" sx={{ marginTop: 1 }}>
            <Link to="/">Volver</Link>
          </Button>
        </Box>
      ) : (
        <Grid
          container
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          marginTop={10}
        >
          <Grid item xs={12} md={8} sm={10} lg={7}>
            {cart.map((product) => (
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "1rem",
                  boxShadow: "3",
                  backgroundColor: "#F6E1DC",
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
                    minWidth: "100px",
                  }}
                >
                  <Typography variant="h6" display={"flex"}>
                    {product.title}
                  </Typography>
                </Box>
                <Grid
                  item
                  xs={12}
                  lg={8}
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
                        bgcolor={"whitesmoke"}
                        borderRadius={1}
                        boxShadow={1}
                        textAlign="center"
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
            xs={8}
            md={4}
            sm={5}
            lg={3}
            boxShadow={1}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            margin={2}
            borderRadius={5}
            height={400}
            sx={{ backgroundColor: "#F6E1DC" }}
          >
            {cart.length > 0 && (
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  src="https://res.cloudinary.com/dwxhsdpc7/image/upload/v1699664543/jessica-ruscello-G8vPQ-XVxxY-unsplash_nhqpap_iacruq.png"
                  height={"250px"}
                  width={"150px"}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column-reverse"}
                  alignItems={"center"}
                  borderTop={1}
                  borderBottom={1}
                  sx={{
                    height: 1 / 2,
                  }}
                  marginBottom={2}
                  back
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
                    <Typography variant="h7" marginTop={1}>
                      El total a pagar es: $ {total}
                    </Typography>
                    <Link to="/checkout">
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        sx={{ border: 1 }}
                      >
                        Finalizar Compra
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={clearCartAlert}
                      color="secondary"
                      sx={{ border: 1 }}
                    >
                      Vaciar Carrito
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Cart;
