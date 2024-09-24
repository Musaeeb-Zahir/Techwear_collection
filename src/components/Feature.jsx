import React from "react";
import FeatureCard from "./FeatureCard";
import featureData from "../data/FeatureData";

function Feature() {
  return (
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
  );
}

export default Feature;
