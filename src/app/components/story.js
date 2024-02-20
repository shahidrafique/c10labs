export default function Story({ title, src, type, link, inner = false }) {
  return (
    <article className={inner ? "story story--inner" : "story"}>
      <div className="story__image">
        <img src={src} alt={title} />
      </div>
      <div className="story__content">
        <div className="upper">
          <div className="tag">{type}</div>
          <h3 className="story__content__title">{title}</h3>
        </div>
        <div className="story__content__more">
          <a href={link} target="_blank" className="button__more">
            Register
          </a>
        </div>
      </div>
    </article>
  );
}
