import React from "react";
import { useNavigate } from "react-router-dom";
function hero() {
  const navigate = useNavigate();
  return (
    <div>
      <section id="hero">
        <h4>Trade-in-Offer</h4>
        <h2>
          <b>Super value deal</b>
        </h2>
        <h1>On all products</h1>
        <p>Save more with coupen and get 70% off!</p>
        <button
          onClick={() => {
            navigate("/shop");
          }}
        >
          Shop Now
        </button>
      </section>
      ;
    </div>
  );
}

export default hero;
