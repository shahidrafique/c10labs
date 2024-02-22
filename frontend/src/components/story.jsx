import Link from "next/link";
import StrapiImage from "./StrapiImage";

export default function Story({ title, src, type, link, inner = false }) {
  return (
    <article className={inner ? "story story--inner" : "story"}>
      <div className="story__image">
        <StrapiImage src={src} alt={title} />
      </div>
      <div className="story__content">
        <div className="upper">
          <div className="tag">{type}</div>
          <h3 className="story__content__title">{title}</h3>
        </div>
        <div className="story__content__more">
          <Link href={link} target="_blank" className="button__more">
            Register
          </Link>
        </div>
      </div>
    </article>
  );
}
