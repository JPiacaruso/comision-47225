import ProductCard from "../../common/productCard/ProductCard";
import "../itemListContainer/ItemList.css";
import { Box, Container } from "@mui/material";

const ItemList = ({ items }) => {
  return (
    <Container
      fixed
      maxWidth="xl"
      sx={{
        padding: 2,
        marginBottom: 8,
      }}
    >
      <Box
        display={"flex"}
        // component="section"
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
        gap={7}
        height={"100"}
        sx={{
          p: 1,
          width: {
            xs: "100%",
            md: "100%",
          },
          Height: {
            xs: "100%",
            md: "100%",
          },
          padding: "20px",
        }}
      >
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </Box>
    </Container>
  );
};

export default ItemList;
