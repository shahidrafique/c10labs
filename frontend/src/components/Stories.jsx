import Link from "next/link";
import Story from "./story";

export default function Stories({
  stories = [],
  title = "",
  description = "",
  moreButton,
  inner = false,
}) {
  return (
    <section className="stories">
      {title ? (
        <div className="container">
          <div className="stories__header">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      ) : null}

      <div className="container">
        <section className="stories__holder">
          {stories.map(({ title, image, type, href = "" }) => (
            <Story
              key={title}
              title={title}
              src={image?.url}
              link={href}
              type={type}
              inner={inner}
            />
          ))}
        </section>
      </div>
      {moreButton ? (
        <div className="container stories__all">
          <Link href={moreButton.href} className="button">
            {moreButton.text}
          </Link>
        </div>
      ) : null}
    </section>
  );
}
