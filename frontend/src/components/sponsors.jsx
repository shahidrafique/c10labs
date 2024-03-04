"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StrapiImage from "./StrapiImage";

export default function Sponsors({ logos }) {
  return (
    <section className="sponsors">
      <div className="title">
        <h3>Perks Partners</h3>
      </div>
      <div className="logos-container">
        <Slider
          speed={5000}
          dots={false}
          pauseOnHover={false}
          cssEase="linear"
          slidesToScroll={1}
          autoplay
          autoplaySpeed={0}
          variableWidth
          arrows={false}
        >
          {/* duplicate to better fill up space on the screen */}
          {logos?.map(({ logos: [{ url }] }) => (
            <StrapiImage key={url + 1} src={url} alt="sponsors" />
          ))}
          {logos?.map(({ logos: [{ url }] }) => (
            <StrapiImage key={url + 2} src={url} alt="sponsors" />
          ))}
          {logos?.map(({ logos: [{ url }] }) => (
            <StrapiImage key={url + 3} src={url} alt="sponsors" />
          ))}
        </Slider>
      </div>
    </section>
  );
}
