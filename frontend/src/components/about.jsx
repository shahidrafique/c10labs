"use client";
import Markdown from "react-markdown";
import StrapiImage from "./StrapiImage";
import Link from "next/link";
import { useEffect } from "react";

export default function About({
  title = "",
  content = "",
  button = {},
  image,
  backgroud,
}) {
  useEffect(() => {
    gsap.to(".about__image", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".about",
        duration: 1,
        scrub: true,
        start: "top 100%",
      },
    });
  });

  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <h2>{title}</h2>
          <div>
            <Markdown>{content}</Markdown>
          </div>
          <Link href={button.href ?? ""} className="button">
            {button.text}
          </Link>
        </div>
        <div className="about__image">
          <StrapiImage src={image?.url} alt="" />
        </div>
      </div>
      <div className="about__image__overlay">
        <img src="/about-lines.svg" alt="" />
      </div>
    </section>
  );
}
