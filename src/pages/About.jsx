import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import about from "../assets/about/a1.png";
import vid from "../assets/about/1.mp4";
import featureData from "../data/FeatureData";
import FeatureCard from "../components/FeatureCard";
function About() {
  return (
    <div>
      <Header />
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </section>
      <section id="about-head" className="section-p1">
        <img src={about} alt="" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed illum
            dolor magni enim vel corporis perferendis laborum accusamus.
            Excepturi eum, modi harum perspiciatis in quas laboriosam voluptate
            repudiandae sequi iure!
          </p>
          <abbr title="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            eum.
          </abbr>
          <br />
          <br />
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem, unde.
          </marquee>
        </div>
      </section>

      <section id="about-app" className="section-p1">
        <h1>
          Download Our <a href="#">App</a>
        </h1>
        <div className="video">
          <video autoplay muted loop src={vid}></video>
        </div>
      </section>
      <section id="feature" className="section-p1">
        {featureData.map((cards) => (
          <FeatureCard
            // cardFeature={cards.Feature}
            cards={cards}
            // cardImage={cards.image}
            key={cards.id}
          />
        ))}
      </section>
      <section id="newslatter" className="section-p1 section-m1">
        <div className="news">
          <h4>SignUp for newslatter</h4>
          <p>
            get E-mail update for about your latest shop and{" "}
            <span>speacial offers.</span>{" "}
          </p>
        </div>
        <div className="form">
          <input
            type="text"
            placeholder="Your E-mail address"
            name="E-mail"
            id="inpit-email"
          />
          <button className="normal">Sign Up</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
