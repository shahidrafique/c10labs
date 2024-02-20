export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <h2>Creating Iconic AI-First Ventures Beyond Screens</h2>
          <p>
            C10 LABS is a Cambridge-based venture studio fund transforming the
            future of AI-First startups.
          </p>
          <a href="/team" className="button">
            More Detail
          </a>
        </div>
        <div className="about__image">
          <img src="/about-image.jpg" alt="" />
        </div>
      </div>
      <div className="about__image__overlay">
        <img src="/about-lines.svg" alt="" />
      </div>
    </section>
  );
}
