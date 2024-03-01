"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ProcessAnimations() {
  let process = document.querySelectorAll(".process .process__box");
  useGSAP(() => {
    if (window.innerWidth >= 768) {
      let process = document.querySelectorAll(".process .process__box");
      gsap.to(process[0], {
        yPercent: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".process",
          duration: 1,
          scrub: true,
          start: "top 75%",
        },
      });

      gsap.to(process[2], {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".process",
          duration: 1,
          scrub: true,
          start: "top 75%",
        },
      });
    }
  });

  return <></>;
}
