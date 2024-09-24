function PeopleCard({ people }) {
  return (
    <div>
      <img src={people.image} alt="ppp" />
      <p>
        <span>{people.name}</span>
        {people.pro}
        <br />
        Phone:{people.contact} <br />
        Email:{people.email}
      </p>
    </div>
  );
}

export default PeopleCard;
