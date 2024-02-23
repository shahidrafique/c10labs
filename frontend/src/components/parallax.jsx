"use client";
import { useEffect } from "react";
import StrapiImage from "./StrapiImage";

export default function Parallax({ title, background }) {
  useEffect(() => {
    gsap.to(".parallax__image img", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax",
        duration: 1,
        scrub: true,
        start: "top 100%",
      },
    });
  });
  return (
    <section className="parallax">
      <div className="parallax__image">
        <StrapiImage src={background?.url} alt="parallax" />
      </div>
      <h2>{title}</h2>
    </section>
  );
}
