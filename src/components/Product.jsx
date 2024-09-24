import React from "react";
import ProductCart from "./ProductCart";
import { ProductData } from "../data/dummyData";
import toast, { Toaster } from "react-hot-toast";
function Product({ product }) {
  const handleToast = (name) => toast.success(`${name} added`);
  return (
    <div>
      <Toaster position="bottom-left" reverseOrder={false} />
      <section id="product1" className="section-p1">
        <h2>featured products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {product.map((cards) => (
            <ProductCart
              cards={cards}
              key={cards.id}
              handleToast={handleToast}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Product;
