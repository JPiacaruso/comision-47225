import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import "../itemListContainer/ItemList.css";
import { Height } from "@mui/icons-material";

const ItemList = ({ items }) => {
  // console.log(items[0]?.title);
  // console.log(items[1]?.title);

  return (
    <section className="ProductSection">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ItemList;
