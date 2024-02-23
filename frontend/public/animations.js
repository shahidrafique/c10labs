const about_image = document.querySelector(".about__image");
gsap.to(about_image, {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: about_image,
    duration: 1,
    scrub: true,
    start: "top 100%",
  },
});

// gsap.to(".parallax__image img", {
//   yPercent: -25,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".parallax",
//     duration: 1,
//     scrub: true,
//     start: "top 100%",
//   },
// });
