import ProductCard from "../../common/productCard/ProductCard";
import "../itemListContainer/ItemList.css";

const ItemList = ({ items }) => {
  return (
    <section className="ProductSection">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ItemList;
