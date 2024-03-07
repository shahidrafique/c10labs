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
        <div className="logos-slide">
          {logos?.map(({ logos: [{ url }] }) => (
            <StrapiImage key={url + 1} src={url} alt="sponsors" />
          ))}
        </div>
        <div className="logos-slide">
          {logos?.map(({ logos: [{ url }] }) => (
            <StrapiImage key={url + 1} src={url} alt="sponsors" />
          ))}
        </div>
        <div className="logos-slide">
          {logos?.map(({ logos: [{ url }] }) => (
            <StrapiImage key={url + 1} src={url} alt="sponsors" />
          ))}
        </div>
      </div>
    </section>
  );
}
