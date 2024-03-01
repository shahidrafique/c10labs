"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroAnimations() {
  useGSAP(() => {
    if (window.innerWidth >= 768)
      gsap.to(".hero__image", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          scrub: true,
          start: "bottom bottom",
          duration: 1,
        },
      });
    gsap.to(".hero__content", {
      yPercent: 250,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        scrub: true,
        start: "bottom bottom",
        duration: 1,
      },
    });
  });
  return <></>;
}
