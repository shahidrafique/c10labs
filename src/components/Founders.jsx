import StrapiImage from "./StrapiImage";

export default function Founders({ founders }) {
  return (
    <div className="container">
      <h2 className="founder-outline">Founders</h2>
      <section className="founder-members">
        {founders.map(({ name, designation, image, about }) => (
          <div key={name} className="founder-member">
            <div className="founder-member__image">
              <StrapiImage src={image?.url} alt="" />
              <div className="intro">{about}</div>
            </div>
            <div className="founder-member__name">
              <h4>{name}</h4>
              <p>{designation}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
