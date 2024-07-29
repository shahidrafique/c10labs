import Link from "next/link";
import StrapiImage from "./StrapiImage";
import ParallaxAnimations from "./animations/Parallax";

export default function Parallax({ title, background }) {
  return (
    <section className="parallax">
      <div className="parallax__image">
        <StrapiImage src={background?.url} alt="parallax" />
      </div>
      <div className="parallax__content">
        <h2>{title}</h2>
      </div>
      <ParallaxAnimations />
    </section>
  );
}
