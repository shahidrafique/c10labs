import Script from "next/script";
import HeroAnimations from "./animations/Hero";

export default function VideoBanner({
  video = { url: "" },
  title = "",
  link = { text: "", href: "" },
}) {
  const [titleDefault, titleRed] = title.split(" - ");

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__image ">
          <video loop="true" autoplay="autoplay" muted>
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <img src="/hero-image.jpg" alt="Hero" />
        </div>
        <div className="hero__content">
          <h1>
            <span>{titleDefault}</span>
            <br />
            <span className="red">{titleRed}</span>
          </h1>
        </div>
      </div>

      <a href={link?.href} target="_blank" className="cohort">
        {link?.text}
      </a>
      <HeroAnimations />
    </section>
  );
}
