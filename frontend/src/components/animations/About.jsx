"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AboutAnimations() {
  useGSAP(() => {
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
  return <></>;
}
