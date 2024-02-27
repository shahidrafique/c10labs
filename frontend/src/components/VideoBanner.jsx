import Script from "next/script";

export default function VideoBanner({ video = "", title = "" }) {
  const [titleDefault, titleRed] = title.split(" - ");
  return (
    <section className="hero banner banner--hero">
      <div className="container">
        <div className="hero__image ">
          {/*   <div className="video__wrapper">
       <iframe
              src="https://player.vimeo.com/video/913483537?h=8fe76490dc&autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0&background=1&muted=1"
              frameborder="0"
              allow="autoplay; fullscreen;"
              allowfullscreen
              className="video__player"
            ></iframe> 
          </div>*/}
          {/* <img src="/parallax-bg.jpeg" alt="AI" /> */}
          {/* <Script src="https://player.vimeo.com/api/player.js" /> */}
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
        Join <span>C10</span>&apos;s Next Cohort
      </a>
    </section>
  );
}
