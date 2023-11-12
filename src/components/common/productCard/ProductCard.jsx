import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2, // Ajusta el margen superior según sea necesario
      }}
    >
      <Card
        sx={{
          width: 300, // Fija el ancho de la tarjeta
          minHeight: 300,
          boxShadow: 5,
          backgroundColor: "rgb(236, 240, 241)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          alt={`image ${item.title}`}
          height="230"
          image={item.img}
        />
        <CardContent
          sx={{
            backgroundColor: "rgb(236, 240, 241)",
            height: "240px",
          }}
        >
          <Typography gutterBottom variant="h5" textAlign="center">
            {item.title}
          </Typography>
          <Typography
            display="flex"
            variant="h7"
            color="text.secondary"
            textAlign="center"
            marginBottom="10px"
          >
            {item.description}
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            marginTop="10px"
            textAlign="center"
          >
            $ {item.price} .-
          </Typography>
        </CardContent>
        <CardActions>
          {item.stock > 0 ? (
            <Link to={`/itemDetail/${item.id}`}>
              <Button size="small" variant="outlined">
                Ver Mas
              </Button>
            </Link>
          ) : (
            <Button variant="contained" disabled>
              Sin Stock
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
