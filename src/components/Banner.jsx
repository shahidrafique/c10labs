export default function Banner({ title = "", content = "", background }) {
  const [titleA, titleB] = title.split(" - ");

  return (
    <section
      className="banner"
      style={{
        background: `url(${process.env.STRAPI_URL}${background?.url})`,
      }}
    >
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
