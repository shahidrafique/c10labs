import Link from "next/link";
import StrapiImage from "./StrapiImage";

export default function Company({
  src,
  title,
  link = "",
  description,
  inner = false,
}) {
  return (
    <Link href={link} target="_blank">
      <article className={inner ? "company company--inner" : "company"}>
        <div className="company__image">
          <StrapiImage src={src} alt={title} />
        </div>
        <div className="company__content">
          <div className="upper-part">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="lower-part"></div>
        </div>
      </article>
    </Link>
  );
}
