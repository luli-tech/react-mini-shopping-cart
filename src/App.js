import Nav from "./navbar";
import Cart from "./shoping-cart";
import Addcart from "./add-cart-items";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const getCart = useSelector((state) => state.addcart.cartAmount);
  useEffect(() => {
    fetch(
      "https://react-shopping-cart-f82f2-default-rtdb.firebaseio.com/gatCart.json",
      { method: "PUT", body: JSON.stringify(getCart) }
    );
  }, [getCart]);
  return (
    <>
      <Nav />
      <Cart />
      <Addcart />
    </>
  );
}

export default App;
