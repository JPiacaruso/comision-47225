import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          // Cambia "elemento === product.id" a "elemento.id === product.id"
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  // limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // poder borrar un elemento particular del carrito
  const deleteProductById = (id) => {
    console.log("El id es: ", id);
    let newArr = cart.filter((product) => product.id !== id);
    setCart(newArr);
  };

  // obtener total carrito

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);

    return total;
  };

  // obtener la cantidad de elementos

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  let data = {
    cart,
    addToCart,
    getQuantityById,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
