import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart" className="cartwidget">
      <Badge badgeContent={total} showZero color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </Link>
  );
};
