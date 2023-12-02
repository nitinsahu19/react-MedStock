import React, { useContext, useState } from "react";
import classes from "./InputForm.module.css";
import MedicinesProvider from "../../store/MedicinesProvider";
import MedicineContext from "../../store/medicines-context";

const InputForm = () => {
  const medCtx = useContext(MedicineContext);

  // Create state variables for each input
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const medicineNameHandler = (event) => {
    setMedicineName(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  };

  const addStockHandler = (event) => {
    event.preventDefault();

    const newStock = {
      id: new Date().getTime(),
      name: medicineName,
      description: description,
      price: price,
      quantity: quantity,
    };

    medCtx.addStock(newStock);
    setMedicineName("");
    setDescription("");
    setPrice("");
    setQuantity("");
  };

  return (
    <MedicinesProvider>
      <form className={classes.form} onSubmit={addStockHandler}>
        <label htmlFor="medicineName">Medicine Name</label>
        <input
          type="text"
          id="medicineName"
          name="medicineName"
          placeholder="Enter Medicine Name"
          className={classes.input}
          onChange={medicineNameHandler}
          value={medicineName}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Enter Description"
          className={classes.input}
          onChange={descriptionHandler}
          value={description}
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Enter Price"
          className={classes.input}
          onChange={priceHandler}
          value={price}
        />

        <label htmlFor="quantity">Quantity Available</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          placeholder="Enter Quantity"
          className={classes.input}
          onChange={quantityHandler}
          value={quantity}
        />

        <button type="submit" className={classes.button}>
          Add product
        </button>
      </form>
    </MedicinesProvider>
  );
};

export default InputForm;
