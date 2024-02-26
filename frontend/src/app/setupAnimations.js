"use client";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

const lenis = new Lenis({
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", scrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
