import Markdown from "react-markdown";
import StrapiImage from "./StrapiImage";
import Link from "next/link";

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
          <Link href={button.href} className="button">
            {button.text}
          </Link>
        </div>
        <div className="about__image">
          <StrapiImage src={image?.url} alt="" />
        </div>
      </div>
      <div className="about__image__overlay">
        <StrapiImage src={backgroud?.url} alt="" />
      </div>
    </section>
  );
}
