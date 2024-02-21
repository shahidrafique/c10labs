import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export default function Parallax() {
  const parallax = useRef();
  useGSAP(
    () => {
      const box = document.querySelector(".parallax__image img");
      const trigger = document.querySelector(".parallax");
      gsap.to(box, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          duration: 1,
          scrub: true,
          start: "top 100%",
        },
      });
    },
    { scope: parallax }
  );
  return (
    <section ref={parallax} className="parallax">
      <div className="parallax__image">
        <img src="/parallax-bg.jpeg" alt="parallax" />
      </div>
      <h2>
        "C10 Labs founders co-taught the pioneering class "AI for Impact:
        Venture Studio."
      </h2>
    </section>
  );
}
