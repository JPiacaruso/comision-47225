import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);
  let totalQuantity = getQuantityById(+id);
  console.log(totalQuantity);

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    console.log("Se agregó al carrito", productSelected);
    console.log(cantidad);

    let product = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(product);

    // setTimeout(() => {
    //   navigate("/cart");
    // }, 2000);
  };

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
    />
  );
};

export default ItemDetailContainer;
