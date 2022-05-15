import React from "react";
import CartItem from "./cart-item";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import StripeCheckoutButton from "../stripe/stripe";
import "./cart-container.css";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2> Your Bag</h2>
          <h4 className="empty-cart"> is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <div className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total: <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
        <StripeCheckoutButton total={total} className="stripe" />
      </footer>
    </div>
  );
};
export default CartContainer;
