import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <span>Total Amount: </span>
      </div>
      <div>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
