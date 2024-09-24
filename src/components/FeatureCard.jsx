function FeatureCard({ cards }) {
  return (
    <>
      {/* {console.log(cards.image)} */}
      <div className="fe-box">
        <img src={cards.image} alt="" />
        <h5>{cards.Feature}</h5>
      </div>
    </>
  );
}

export default FeatureCard;
// cardFeature, cardImage
