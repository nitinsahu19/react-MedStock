import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Header from "./components/layout/Header";
import Cart from "./components/Cart/Cart";
import MedicinesProvider from "./store/MedicinesProvider";

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
    </MedicinesProvider>
  );
}

export default App;
