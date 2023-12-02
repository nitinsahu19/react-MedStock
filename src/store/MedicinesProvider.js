import { useState } from "react";
import MedicineContext from "./medicines-context";

const MedicinesProvider = (props) => {
  // state for store data & cart items
  const [stock, setStock] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addStockHandler = (newStock) => {
    setStock([...stock, newStock]);
  };

  const addToCartHandler = (itemId) => {
    const newItem = stock.find((item) => item.id === itemId);
    setCartItems([...cartItems, newItem]);
  };

  const storeContext = {
    stock,
    addStock: addStockHandler,
    cartItems,
    addToCart: addToCartHandler,
  };

  return (
    <MedicineContext.Provider value={storeContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicinesProvider;
