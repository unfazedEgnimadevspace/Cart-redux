import React from "react";
import { closeModal } from "./features/modal/modalSlice";
import { clearCartItems } from "./features/cart/cartSlice";
import { useDispatch } from "react-redux";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4> remove all items from shopping cart</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCartItems());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
