export default function Company({ src, title, link, inner = false }) {
  return (
    <article className={inner ? "company company--inner" : "company"}>
      <div className="company__image">
        <img src={src} alt={title} />
      </div>
      <div className="company__content">
        <div className="upper-part">
          <h3>{title}</h3>
        </div>
        <div className="lower-part">
          <a href={link} target="_blank">
            Website
          </a>
        </div>
      </div>
    </article>
  );
}
