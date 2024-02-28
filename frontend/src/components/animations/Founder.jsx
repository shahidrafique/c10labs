"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function FoundersAnimations() {
  useGSAP(() => {
    if (window.innerWidth >= 768) {
      let members = document.querySelectorAll(
        ".founder-members .founder-member"
      );

      gsap.to(members[0], {
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".founder-members",
          duration: 1,
          scrub: true,
          start: "top 75%",
        },
      });

      gsap.to(members[2], {
        yPercent: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".founder-members",
          duration: 1,
          scrub: true,
          start: "top 75%",
        },
      });
    }
  });
  return <></>;
}
