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
          {companies.map(({ name, href = "", image, description }) => (
            <Company
              key={name}
              title={name}
              src={image?.url}
              link={href}
              description={description}
            />
          ))}
        </section>
        <div className="button-group">
          <Link href={button.href} className="button">
            {button.text}
          </Link>
          <Link href="/contact" className="button button__outline">
            Contact Us
          </Link>
        </div>
      </section>
    </section>
  );
}
