import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = undefined;

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(newArray);
    });
  }, [categoryName]);

  return (
    <>
      {/* Ternario */}
      {items.length === 0 ? (
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <Skeleton variant="rectangular" width={300} height={180} />
            <Skeleton variant="text" width={300} height={70} />
            <Skeleton variant="rounded" width={210} height={60} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={180} />
            <Skeleton variant="text" width={300} height={70} />
            <Skeleton variant="rounded" width={210} height={60} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={180} />
            <Skeleton variant="text" width={300} height={70} />
            <Skeleton variant="rounded" width={210} height={60} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={180} />
            <Skeleton variant="text" width={300} height={70} />
            <Skeleton variant="rounded" width={210} height={60} />
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
