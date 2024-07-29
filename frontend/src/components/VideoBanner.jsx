import Script from "next/script";
import HeroAnimations from "./animations/Hero";
import Link from "next/link";

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
          <video loop autoPlay muted>
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
        <span>Click here to</span>
        {link?.text}{" "}
        <svg
          width="26"
          height="29"
          viewBox="0 0 26 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5833 22.3862H5.41667V6.46543H13V4.19104H5.41667C4.21417 4.19104 3.25 5.21452 3.25 6.46543V22.3862C3.25 23.6371 4.21417 24.6605 5.41667 24.6605H20.5833C21.775 24.6605 22.75 23.6371 22.75 22.3862V14.4258H20.5833V22.3862ZM15.1667 4.19104V6.46543H19.0558L8.40667 17.6441L9.93417 19.2475L20.5833 8.06887V12.1514H22.75V4.19104H15.1667Z"
            fill="#FF1423"
          />
        </svg>
      </a>
      <HeroAnimations />
    </section>
  );
}
