import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ element }) => {
  const cartitems = useSelector((store) => store.cart.cart);
  return cartitems.length > 0 ? element : <Navigate to="/" />;
};

export default ProtectedRoute;