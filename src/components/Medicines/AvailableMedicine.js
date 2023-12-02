import React, { useContext, useState } from "react";
import classes from "./AvailableMedicine.module.css";
import MedicineContext from "../../store/medicines-context";

const AvailableMedicine = () => {
  const stockData = useContext(MedicineContext);

  const addItemHandler = (itemId) => {
    stockData.addToCart(itemId);
  };

  return (
    <div className={classes.availableMedicine}>
      <h2>Available Medicines</h2>
      <ul>
        {stockData.stock.map((medicine) => (
          <li key={medicine.id}>
            <strong>Name:</strong> {medicine.name},{" "}
            <strong>Description:</strong> {medicine.description},{" "}
            <strong>Price:</strong> {medicine.price}, <strong>Quantity:</strong>{" "}
            {medicine.quantity}
            <button onClick={() => addItemHandler(medicine.id)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableMedicine;
