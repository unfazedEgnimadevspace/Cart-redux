import React from "react";
import { CartIcon } from "./icons";
import { useSelector } from "react-redux";
import pic from "./assets/daniel-2.png";
import "./navabar.css";
const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <img src={pic} alt="logo" className="logo" />
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
