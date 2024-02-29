"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StrapiImage from "./StrapiImage";

export default function Sponsors({ logos }) {
  return (
    <section className="sponsors">
      <div className="logos-container">
        <Slider
          speed={500}
          dots={false}
          infinite
          slidesToScroll={1}
          autoplay
          variableWidth
          arrows={false}
        >
          {/* duplicate to better fill up space on the screen */}
          {logos?.map(({ logos: [{ url }] }) => (
            <StrapiImage key={url + 1} src={url} alt="" />
          ))}
          {logos?.map(({ logos: [{ url }] }) => (
            <StrapiImage key={url + 2} src={url} alt="" />
          ))}
        </Slider>
      </div>
    </section>
  );
}
