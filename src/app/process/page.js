"use client";
import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export default function Process() {
  const process = useRef();
  useGSAP(
    () => {
      const process = document.querySelectorAll(".process .process__box");
      const trigger = document.querySelector(".process");
      gsap.to(process[2], {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          duration: 1,
          scrub: true,
          start: "top 75%",
        },
      });
      gsap.to(process[0], {
        yPercent: 100,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          duration: 1,
          scrub: true,
          start: "top 75%",
        },
      });
    },
    { scope: process }
  );
  return (
    <main>
      {/* banner */}
      <section className="banner banner--process">
        <div className="container">
          <div className="banner__content">
            <h1>
              Think Big. Spot-Probe.
              <br />
              <span>Set Course.</span>
            </h1>
            <div className="banner__sub-heading">
              Embedded in the world's top AI ecosystem, our ideation meetups
              with experts and industry leaders generate rich venture theses in
              high-growth sectors.
            </div>
          </div>
        </div>
      </section>

      {/* Process */}

      <section className="process">
        <div className="container">
          <div className="process__box">
            <div className="process__box__title">Spot Lucrative Problem</div>
            <div className="process__box__image"></div>
            <div className="process__box__content">
              Our studio teams rapidly dissects and articulate the venture
              thesis for viability, utilizing our extensive network and market
              research resources.
            </div>
          </div>

          <div className="process__box">
            <div className="process__box__title">Probe Potential</div>
            <div className="process__box__image"></div>
            <div className="process__box__content">
              We assess the opportunity by forming a proto-venture, tapping into
              both internal and external talent, and assembling a team for the
              NewCo.
            </div>
          </div>

          <div className="process__box">
            <div className="process__box__title">Launch NewCo</div>
            <div className="process__box__image"></div>
            <div className="process__box__content">
              Centered around collaboration and mentorship, we nurture and
              launch the battle-tested NewCo, designed to expand and make a
              significant impact across industries.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
