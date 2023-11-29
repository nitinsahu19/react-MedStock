import React, { useState } from "react";
import classes from "./InputForm.module.css";

const InputForm = () => {
  // Create state variables for each input
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [stock, setStock] = useState([]);

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
      name: medicineName,
      description: description,
      price: price,
      quantity: quantity,
    };

    setStock([...stock, newStock]);
    console.log(stock);
  };

  return (
    <form className={classes.form} onSubmit={addStockHandler}>
      <label htmlFor="medicineName">Medicine Name</label>
      <input
        type="text"
        id="medicineName"
        name="medicineName"
        placeholder="Enter Medicine Name"
        className={classes.input}
        onChange={medicineNameHandler}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Enter Description"
        className={classes.input}
        onChange={descriptionHandler}
      />

      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        placeholder="Enter Price"
        className={classes.input}
        onChange={priceHandler}
      />

      <label htmlFor="quantity">Quantity Available</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        placeholder="Enter Quantity"
        className={classes.input}
        onChange={quantityHandler}
      />

      <button type="submit" className={classes.button}>
        Add product
      </button>
    </form>
  );
};

export default InputForm;
