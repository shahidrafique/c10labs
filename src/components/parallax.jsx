import StrapiImage from "./StrapiImage";

export default function Parallax() {
  return (
    <section className="parallax">
      <div className="parallax__image">
        <StrapiImage src="/parallax-bg.jpeg" alt="parallax" />
      </div>
      <h2>
        "C10 Labs founders co-taught the pioneering class "AI for Impact:
        Venture Studio."
      </h2>
    </section>
  );
}
