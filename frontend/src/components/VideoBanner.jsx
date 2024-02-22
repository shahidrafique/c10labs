import Script from "next/script";

export default function VideoBanner({ video = "", title = "" }) {
  const [titleDefault, titleRed] = title.split(" - ");
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__image">
          <div className="video__wrapper">
            <iframe
              src={video}
              frameborder="0"
              allow="autoplay; fullscreen;"
              allowfullscreen
              className="video__player"
            ></iframe>
          </div>
          <Script src="https://player.vimeo.com/api/player.js" />
        </div>
        <div className="hero__content">
          <h1>
            <span>{titleDefault}</span>
            <br />
            <span className="red">{titleRed}</span>
          </h1>
        </div>
      </div>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScl4Yk2aziSgg63JTlfIYjh8XK2ptHK5W3MpslZ_748ieXoLA/viewform"
        target="_blank"
        className="cohort"
      >
        Join <span>C10</span>&apos;s Spring Cohort
      </a>
    </section>
  );
}
