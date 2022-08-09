// Utils & Config
import React, { useState } from "react";
import ShoppingCartContext from "./shoppingCartContext";

const ShoopingCartContextProvider = (props) => {
  const [shoppingCart, setshoppingCart] = useState({
    vehicleParts: [],
    products: [],
  });

  return <ShoppingCartContext.Provider value={[shoppingCart, setshoppingCart]}>{props.children}</ShoppingCartContext.Provider>;
};

export default ShoopingCartContextProvider;
