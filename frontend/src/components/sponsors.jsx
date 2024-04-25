"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StrapiImage from "./StrapiImage";
import { Fragment, useMemo } from "react";

export default function Sponsors({ logos }) {
  const nonEmptyLogos = useMemo(
    () => logos?.filter(({ logos }) => logos.length > 0) ?? [],
    [logos]
  );

  const Slide = (
    <div className="logos-slide">
      {nonEmptyLogos.map(({ logos: [{ url }] }) => (
        <StrapiImage key={url + 1} src={url} alt="sponsors" />
      ))}
    </div>
  );

  return (
    <section className="sponsors">
      <div className="title">
        <h3>Perks Partners</h3>
      </div>
      <div className="logos-container">
        {/* multiple slides for animation */}
        {new Array(3).fill(Slide).map((s, i) => (
          <Fragment key={i}>{s}</Fragment>
        ))}
      </div>
    </section>
  );
}
