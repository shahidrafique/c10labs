import StrapiImage from "./StrapiImage";

export default function Parallax({ title, background }) {
  return (
    <section className="parallax">
      <div className="parallax__image">
        <StrapiImage src={background?.url} alt="parallax" />
      </div>
      <h2>{title}</h2>
    </section>
  );
}
