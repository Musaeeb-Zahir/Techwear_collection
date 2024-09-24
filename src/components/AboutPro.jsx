import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import Newslatter from "./Newslatter";
import Footer from "./Footer";
function AboutPro() {
  const AboutProStore = useSelector((store) => store.AboutPro.pro);
  const dispatch = useDispatch();
  const handleToast = (name) => toast.success(`${name} added`);
  console.log(AboutProStore);
  return (
    <div>
      <Toaster position="bottom-left" reverseOrder={false} />
      <Header />
      <section id="prodetails" class="section-p1">
        <div class="single-pro-img">
          <img src={AboutProStore[0].img} width="100%" id="main-img" alt="" />
        </div>
        <div class="single-pro-details">
          <h4>{AboutProStore[0].name}</h4>
          <h2>${AboutProStore[0].price}</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>small</option>
            <option>Large</option>
          </select>
          <button
            class="normal"
            onClick={() => {
              handleToast(AboutProStore[0].name);
              dispatch(addToCart(AboutProStore[0]));
            }}
          >
            Add to Card
          </button>
          <h4>Product detail</h4>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            modi tempore nam hic voluptates? Quod soluta blanditiis dolore
            accusamus dolores voluptatum amet, labore aperiam sequi repellendus
            non officiis tempora alias! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea dolorum hic, veritatis inventore ipsam tempore
            eius labore ullam repellendus, saepe, cumque fugiat quo commodi
            doloremque provident nemo obcaecati atque? Labore!
          </span>
        </div>
      </section>
      <Newslatter />
      <Footer />
    </div>
  );
}

export default AboutPro;
