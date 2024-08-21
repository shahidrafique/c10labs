"use client";

import { useState } from "react";
import StrapiImage from "./StrapiImage";

export const Testimonials = ({ testimonials }) => {
  const [slide, setSlide] = useState(0);

  const prev = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  const next = () => {
    if (slide < testimonials.length - 1) setSlide(slide + 1);
  };

  return (
    <section class="testimonials">
      <div class="arrow-navigation">
        <button className="arrow-navigation-icon" onClick={prev}>
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.50008 16L8.70374 14.59L3.94032 9H14.3293L14.3293 7L3.94032 7L8.70374 1.41L7.50008 0L0.67081 8L7.50008 16Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="arrow-navigation-icon" onClick={next}>
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.49992 0L6.29626 1.41L11.0597 7H0.670654V9H11.0597L6.29626 14.59L7.49992 16L14.3292 8L7.49992 0Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div class="container">
        <div
          className="testimonials-wrapper"
          style={{ "--slide": `${-slide * 100}%` }}
        >
          {testimonials.map(({ content, avatar, name, designation }) => (
            <article class="testimonial">
              <div class="testimonial__content">
                <div class="testimonial__content__text">{content}</div>
                <div class="lower-part">
                  <div class="left">
                    <div class="testimonial__content__name">{name}</div>
                    <div class="testimonial__content__designation">
                      {designation}
                    </div>
                  </div>
                  <div class="right"></div>
                </div>
              </div>
              <div class="testimonial__image">
                <StrapiImage
                  src={avatar.url}
                  width={avatar.width}
                  height={avatar.height}
                  quality={100}
                  alt="testimonial"
                  useNextImage
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
