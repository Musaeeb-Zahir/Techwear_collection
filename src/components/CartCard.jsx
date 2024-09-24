import React, { useRef } from "react";
import close from "../assets/svg/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addQuantity } from "../redux/slices/cartSlice";
function cartCard({ name, price, img, id, qty, handleRemoveToast }) {
  const dispatch = useDispatch();
  // const store = useSelector((items) => items.cart.cart);
  function HandleQtyChange(e) {
    const newQty = parseInt(e.target.value, 10);
    if (newQty > 0) {
      dispatch(addQuantity({ id, newQty }));
    }
  }
  const subtotalPrice = price * qty;
  return (
    <tr>
      <td
        onClick={() => {
          dispatch(removeFromCart(id));
          handleRemoveToast(name);
        }}
      >
        <img src={close} alt="" />
      </td>
      <td>
        <img id="table-pro-img" src={img} alt="" />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <input type="number" value={qty} min={1} onChange={HandleQtyChange} />
      </td>
      <td>{subtotalPrice}</td>
    </tr>
  );
}

export default cartCard;
