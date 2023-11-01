import CounterContainer from "../../common/counter/CounterContainer";
import { Box } from "@mui/material";
import "./itemDetail.css";
import { Link } from "react-router-dom";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <Box
      height={450}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 2,
        margin: 2,
        padding: 2,
        borderRadius: 2,
        border: 1,
      }}
    >
      <Box>
        <img
          src={productSelected.img}
          alt={productSelected.title}
          height={350}
          width={350}
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        margin={7}
      >
        <h2>{productSelected.title}</h2>
        <h4>{productSelected.description}</h4>
        <h4> ${productSelected.price}.-</h4>
      </Box>

      {initial && <h4>Ya tienes {initial} unidades</h4>}

      {showCounter ? (
        <Box>
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </Box>
      ) : (
        <Link to="/cart">Terminar Compra</Link>
      )}
    </Box>
  );
};
