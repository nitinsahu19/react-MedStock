import { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import MedicineContext from "../../store/medicines-context.js";

const Cart = (props) => {
  // store data being used here using context-api
  const cartData = useContext(MedicineContext);

  const [totalAmount, setTotalAmount] = useState("");

  const plusItemHandler = () => {};

  const minusItemHandler = () => {};

  const totalAmountHandler = () => {};

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cartList}>
        <ul>
          {cartData.cartItems.map((medicine, index) => (
            <li key={index}>
              <div className={classes.metadata}>
                <h2>{medicine.name}</h2>
                <h4>${medicine.price}</h4>
                <p>{medicine.description}</p>
                <button className={classes.counter}>x 1</button>
              </div>
              <div>
                <button className={classes.plus} onClick={plusItemHandler}>
                  +
                </button>
                <button className={classes.minus} onClick={minusItemHandler}>
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.total}>
        <span>Total Amount: </span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button className={classes.close} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.order}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
