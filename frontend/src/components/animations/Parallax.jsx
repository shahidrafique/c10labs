"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ParallaxAnimations() {
  useGSAP(() => {
    if (window.innerWidth >= 768)
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
  return <></>;
}
