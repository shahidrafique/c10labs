export default function Banner({
  title = "",
  content = "",
  background,
  cssClass,
}) {
  const [titleA, titleB] = title.split(" - ");

  return (
    <section className={`banner ${cssClass}`}>
      <div className="container">
        <div className="banner__content">
          <h1>
            {titleA}
            <br />
            <span>{titleB}</span>
          </h1>
          <div className="banner__sub-heading">{content}</div>
        </div>
      </div>
    </section>
  );
}
