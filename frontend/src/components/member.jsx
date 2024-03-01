import Link from "next/link";
import StrapiImage from "./StrapiImage";

export default function Member({ title, designation, src, linkedin = "" }) {
  return (
    <div className="member">
      <div className="member__image">
        <StrapiImage src={src} alt={title} />
      </div>
      <div className="member__content">
        <div className="member__content__name">{title}</div>
        <div className="member__content__designation">{designation}</div>
        {linkedin ? (
          <Link
            href={linkedin}
            className="member__content__linked"
            target="_blank"
          />
        ) : null}
      </div>
    </div>
  );
}
