import { useState } from "react";
import MedicineContext from "./medicines-context";

const MedicinesProvider = (props) => {
  const [stock, setStock] = useState([]);
  const addStockHandler = (newStock) => {
    setStock([...stock, newStock]);
  };

  const medicineContext = {
    stock: stock,
    addStock: addStockHandler,
  };

  return (
    <MedicineContext.Provider value={medicineContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicinesProvider;
