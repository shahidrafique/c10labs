import Link from "next/link";
import Company from "./company";

export default function Companies({
  title = "",
  content = "",
  companies = [],
  button = {},
}) {
  const [titleText, titleYear] = title.split(" - ");

  return (
    <section className="companies">
      <section className="container">
        <section className="companies__content">
          <h2>
            {titleText} <span className="text-red">{titleYear}</span>
          </h2>
          <p>{content}</p>
        </section>
        <section className="companies__container">
          {companies.map(({ name, href = "", image }) => (
            <Company key={name} title={name} src={image?.url} link={href} />
          ))}
        </section>
        {/* {button ? (
          <Link href={button.hre ?? ""} className="button">
            {button.text}
          </Link>
        ) : null} */}
        <Link href="/companies" className="button">
          {button.text}
        </Link>
      </section>
    </section>
  );
}
