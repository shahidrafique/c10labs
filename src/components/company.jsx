import Link from "next/link";
import StrapiImage from "./StrapiImage";

export default function Company({ src, title, link, inner = false }) {
  return (
    <article className={inner ? "company company--inner" : "company"}>
      <div className="company__image">
        <StrapiImage src={src} alt={title} />
      </div>
      <div className="company__content">
        <div className="upper-part">
          <h3>{title}</h3>
        </div>
        <div className="lower-part">
          <Link href={link} target="_blank">
            Website
          </Link>
        </div>
      </div>
    </article>
  );
}
