export default function Stories() {
  return (
    <main>
      {/* Banner */}

      <section className="banner banner--companies">
        <div className="container">
          <div className="banner__content">
            <h1>
              Latest
              <br />
              <span>Stories</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Stories */}

      <section className="stories stories--inner-page">
        <div className="container">
          <section className="stories__holder">
            <div className="story story--inner">
              <div className="story__image">
                <img src="/stories/latest.jpeg" alt="" />
              </div>
              <div className="story__content">
                <div className="upper">
                  <div className="tag">Event</div>
                  <h3 className="story__content__title">
                    Boston's Women in AI: Igniting Innovation
                  </h3>
                  <p>
                    Join us for an inspiring evening that celebrates women in
                    AI. Boston and Cambridge are at the forefront of AI
                    innovation, and this event aims to showcase the brilliant
                    minds and cutting-edge projects led by women in this field.
                  </p>
                </div>
                <div className="story__content__more">
                  <a
                    href="https://gatsby.events/rsvp/bostons-women-of-ai-igniting-innovation/glasswing-ventures/register?progress=1"
                    target="_blank"
                    className="button__more"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
            <div className="story story--inner">
              <div className="story__image">
                <img src="/stories/1.webp" alt="" />
              </div>
              <div className="story__content">
                <div className="upper">
                  <div className="tag">Event</div>
                  <h3 className="story__content__title">
                    Feb 8, 2024: AI in the Built World: Architecture, Civil
                    Engg., Construction/Operations
                  </h3>
                </div>
                <div className="story__content__more">
                  <a
                    href="https://www.eventbrite.com/e/ai-in-the-built-world-architecture-civil-engg-constructionoperations-tickets-807158882947?aff=oddtdtcreator"
                    target="_blank"
                    className="button__more"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
            <div className="story story--inner">
              <div className="story__image">
                <img src="/stories/2.webp" alt="" />
              </div>
              <div className="story__content">
                <div className="tag">Video</div>
                <h3 className="story__content__title">
                  Nov 16, 2023: C10 Labs + CIC - Dimensional AI hub launch
                </h3>
                <div className="story__content__more">
                  <a
                    href="https://youtu.be/7NBVmVJKols"
                    target="_blank"
                    className="button__more"
                  >
                    Watch
                  </a>
                </div>
              </div>
            </div>
            <div className="story story--inner">
              <div className="story__image">
                <img src="/stories/3.webp" alt="" />
              </div>
              <div className="story__content">
                <div className="tag">Press</div>
                <h3 className="story__content__title">
                  Nov 16, 2023, Hoodline:New AI Center Collaboratively Launched
                  by CIC and C10 Labs in Cambridge's Kendall Square
                </h3>
                <div className="story__content__more">
                  <a
                    href="https://hoodline.com/2023/11/new-ai-center-collaboratively-launched-by-cic-and-c10-labs-in-cambridge-s-kendall-square/"
                    target="_blank"
                    className="button__more"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="story story--inner">
              <div className="story__image">
                <img src="/stories/4.webp" alt="" />
              </div>
              <div className="story__content">
                <div className="tag">Press</div>
                <h3 className="story__content__title">
                  Nov 16, 2023, Axios: CIC, C10 Labs launch an AI hub in Kendall
                  Square
                </h3>
                <div className="story__content__more">
                  <a
                    href="https://www.axios.com/local/boston/2023/11/16/ai-hub-cambridge-cic-mit-media-lap"
                    target="_blank"
                    className="button__more"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="story story--inner">
              <div className="story__image">
                <img src="/stories/5.webp" alt="" />
              </div>
              <div className="story__content">
                <div className="tag">Press</div>
                <h3 className="story__content__title">
                  Nov 16, 2023, BostonInno: New AI hub launches in Cambridge’s
                  Kendall Square
                </h3>
                <div className="story__content__more">
                  <a
                    href="https://www.bizjournals.com/boston/inno/stories/news/2023/11/16/new-ai-hub-launches-cambridge-kendall-square.html"
                    target="_blank"
                    className="button__more"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
