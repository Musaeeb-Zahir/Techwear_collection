import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import mail from "../assets/svg/mail.svg";
import call from "../assets/svg/call.svg";
import map from "../assets/svg/map.svg";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";
import Newslatter from "../components/Newslatter";

function Contact() {
  return (
    <>
      <Header />
      <section id="page-header" className="about-header">
        <h2>#Let's-Talk</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency location or contact us</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <img width="20px" src={map} alt="" />
              <p>House No PD337, Nazimabad 7th road,Pindora Rawalpindi</p>
            </li>
            <li>
              <img width="20px" src={mail} alt="" />
              <p>musaeebzahir@gmail.com</p>
            </li>
            <li>
              <img width="20px" src={call} alt="" />
              <p>+92 355-4433912</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.33171442145!2d73.06816277479507!3d33.648565838939405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9526ac121123%3A0x9b6fd9eb6237e303!2sYugo%20House%20Rawalpindi!5e0!3m2!1sen!2s!4v1704953424884!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <CommentForm />
      <Newslatter />
      <Footer />
    </>
  );
}

export default Contact;
