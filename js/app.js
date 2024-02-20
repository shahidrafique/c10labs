const lenis = new Lenis({
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Hero Section
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

gsap.from(".hero__content h1", {
  yPercent: 50,
  opacity: 0,
  duration: 1,
});

gsap.from(".hero__content h1 i", {
  yPercent: 20,
  delay: 0.5,
  duration: 1,
  opacity: 0,
});

// Hero Section End

// CTA Top

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

gsap.to(".parallax__image img", {
  yPercent: -25,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax",
    duration: 1,
    scrub: true,
    start: "top 100%",
  },
});

// founders

let members = document.querySelectorAll(".founder-members .founder-member");

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

//  Process

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

// companies

let companies = gsap.utils.toArray(".companies .company");

gsap.set(companies, { opacity: 0, y: "50" });

gsap.to(companies, {
  opacity: 1,
  y: "0",
  ease: "none",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".companies",
    duration: 0.25,
    start: "top 75%",
  },
});
