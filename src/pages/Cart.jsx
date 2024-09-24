import React from "react";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Newslatter from "../components/Newslatter";
import { useNavigate } from "react-router-dom";
function Cart() {
  const Navigate = useNavigate();
  const store = useSelector((state) => state.cart.cart);
  // totalQuantity=store.reduce((accum,item)=>accum + item)
  const totalPrice = store.reduce(
    (accum, item) => accum + item.price * item.qty,
    0
  );
  function handleRemoveToast(name) {
    toast(`${name} is removed`, {
      icon: "👋",
    });
  }
  return (
    <div>
      <Header />
      <Toaster position="bottom-left" reverseOrder={false} />
      <section id="page-header" className="about-header">
        <h2>#Let's-Talk</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </section>

      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <td>Remove</td>
            <td>Image</td>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
          </thead>
          <tbody>
            {store.length > 0 &&
              store.map((items) => (
                <CartCard
                  key={items.id}
                  name={items.name}
                  price={items.price}
                  img={items.img}
                  id={items.id}
                  qty={items.qty}
                  handleRemoveToast={handleRemoveToast}
                />
              ))}
          </tbody>
        </table>

        {store.length == 0 && (
          <div className="font-bold text-xl text-center mt-20 mb-30 text-gray-500">
            Cart is empty please add some product
          </div>
        )}
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply coupon</h3>
          <div>
            <input type="text" placeholder="Enter your coupon" required />
            <button
              className="normal"
              onClick={() => {
                toast.error("No coupon found");
              }}
            >
              Apply
            </button>
          </div>
        </div>
        <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
            <tr>
              <td>Card subtotal</td>
              <td>$ {totalPrice}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>${totalPrice}</strong>
              </td>
            </tr>
          </table>
          <button
            className="normal"
            onClick={() => {
              Navigate("/success");
            }}
          >
            proceed to Cheakout
          </button>
        </div>
      </section>
      <Newslatter />
      <Footer />
    </div>
  );
}

export default Cart;
