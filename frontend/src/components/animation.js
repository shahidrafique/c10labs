"use client";
import Script from "next/script";

export default function Animation() {
  const ani = () => {};

  return (
    <>
      <Script src="https://unpkg.co/gsap@3/dist/gsap.min.js" />
      <Script
        src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"
        onLoad={ani}
      />
    </>
  );
}
