import Markdown from "react-markdown";
import StrapiImage from "./StrapiImage";
import Link from "next/link";
import AboutAnimations from "./animations/About";

export default function About({
  title = "",
  content = "",
  button = {},
  image,
  backgroud,
}) {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <h2>{title}</h2>
          <div>
            <Markdown>{content}</Markdown>
          </div>
          <Link href={button.href ?? ""} className="button">
            {button.text}
          </Link>
        </div>
        <div className="about__image">
          <StrapiImage
            useNextImage
            width={600}
            height={735}
            src={image?.url}
            alt=""
          />
        </div>
      </div>
      <div className="about__image__overlay">
        <img src="/about-lines.svg" alt="" />
      </div>
      <AboutAnimations />
    </section>
  );
}
