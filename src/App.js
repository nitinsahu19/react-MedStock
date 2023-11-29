import { useState } from "react";
import "./App.css";
import InputForm from "./components/Input/InputForm";
import Header from "./components/layout/Header";
import Cart from "./components/Cart/Cart";
import MedicinesProvider from "./store/MedicinesProvider";
import AvailableMedicine from "./components/Medicines/AvailableMedicine";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <MedicinesProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <InputForm />
      <AvailableMedicine />
    </MedicinesProvider>
  );
}

export default App;
