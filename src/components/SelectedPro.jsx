import React from "react";

function SelectedPro() {
  return (
    <div>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-img">
          <img src="assets/Product/f1.jpg" width="100%" id="main-img" alt="" />
          <div className="small-img-group">
            <div className="small-img-col">
              <img
                src="assets/Product/f1.jpg"
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                src="assets/Product/f2.jpg"
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                src="assets/Product/f3.jpg"
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                src="assets/Product/f4.jpg"
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="single-pro-details">
          <h5>Home /T-Shirts</h5>
          <h4>Men's fashions T-shirts</h4>
          <h2>$156.000</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />
          <button className="normal">Add to Card</button>
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
    </div>
  );
}

export default SelectedPro;
