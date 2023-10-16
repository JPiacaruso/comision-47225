import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  // const tarea = new Promise((resolve, reject) => {
  //   resolve(products);
  //   reject("algo salio mal");
  // });

  // tarea.then((res) => setItems(res)).catch((error) => console.log(error));

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
      // reject("algo salio mal");
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
