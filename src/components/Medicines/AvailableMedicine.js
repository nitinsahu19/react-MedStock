import React, { useContext } from "react";
import classes from "./AvailableMedicine.module.css";
import MedicineContext from "../../store/medicines-context";

const AvailableMedicine = () => {
  const stockData = useContext(MedicineContext);

  return (
    <div className={classes.availableMedicine}>
      <h2>Available Medicines</h2>
      <ul>
        {stockData.stock.map((medicine, index) => (
          <li key={index}>
            <strong>Name:</strong> {medicine.name},{" "}
            <strong>Description:</strong> {medicine.description},{" "}
            <strong>Price:</strong> {medicine.price}, <strong>Quantity:</strong>{" "}
            {medicine.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableMedicine;
