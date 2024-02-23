"use client";
import { useEffect } from "react";
import StrapiImage from "./StrapiImage";

export default function Founders({ founders }) {
  useEffect(() => {
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
  });
  return (
    <div className="container">
      <h2 className="founder-outline">Founders</h2>
      <section className="founder-members">
        {founders.map(({ name, designation, image, about }) => (
          <div key={name} className="founder-member">
            <div className="founder-member__image">
              <StrapiImage src={image?.url} alt="" />
              <div className="intro">{about}</div>
            </div>
            <div className="founder-member__name">
              <h4>{name}</h4>
              <p>{designation}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
