"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AboutAnimations() {
  useGSAP(() => {
    if (window.innerWidth >= 768)
      gsap.to(".about__image", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".about",
          duration: 1,
          scrub: true,
          start: "top 100%",
        },
      });
  });
  return <></>;
}
