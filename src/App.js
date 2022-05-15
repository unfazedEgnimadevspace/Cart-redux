import React, { useEffect } from "react";
import CartContainer from "./component/cart-container";
import Navbar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { calculateItemsAmount, getCartItems } from "./features/cart/cartSlice";
import Modal from "./Modal";

const App = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateItemsAmount());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading ....</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default App;
