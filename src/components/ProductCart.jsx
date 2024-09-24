import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { AddPro } from "../redux/slices/AboutPro";
function ProductCart({ cards, handleToast }) {
  // const store = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  return (
    <div className="pro">
      <img
        src={cards.img}
        alt=""
        onClick={() => {
          Navigate("/AboutPro");
          dispatch(AddPro(cards));
        }}
      />
      <div className="des">
        <span>{cards.name}</span>
        <h5>{cards.text.slice(0, 50)}...</h5>
        <div className="star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="flex justify-between flex-row items-center">
          <h4>${cards.price}</h4>
          <div
            onClick={() => {
              dispatch(addToCart(cards));
              handleToast(cards.name);
            }}
            className="addToCartIcon"
          >
            <MdAddShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
