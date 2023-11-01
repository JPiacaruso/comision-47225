import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  colors,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="image ${item.title}"
        maxWidth="100"
        height="180"
        image={item.img}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          {item.title}
        </Typography>
        <Typography variant="h7" color="text.secondary" textAlign="center">
          {item.description}
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          textAlign="center"
          marginTop="10px"
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
  );
};

export default ProductCard;
