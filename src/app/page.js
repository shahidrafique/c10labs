"use client";
import Company from "./components/company";
import Story from "./components/story";
import Parallax from "./components/parallax";
import Sponsors from "./components/sponsors";

import About from "./components/about";
export default function Home() {
  return (
    <main>
      {/* Hero */}

      <section className="hero">
        <div className="container">
          <div className="hero__image">
            <div className="video__wrapper">
              <iframe
                src="https://player.vimeo.com/video/913483537?h=8fe76490dc&autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0&background=1&muted=1"
                frameborder="0"
                allow="autoplay; fullscreen;"
                allowfullscreen
                className="video__player"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div className="hero__content">
            <h1>
              <span>AI Venture</span>
              <br />
              <span className="red">Studio</span>
            </h1>
          </div>
        </div>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScl4Yk2aziSgg63JTlfIYjh8XK2ptHK5W3MpslZ_748ieXoLA/viewform"
          target="_blank"
          className="cohort"
        >
          Join <span>C10</span>'s Spring Cohort
        </a>
      </section>

      {/* About Us */}

      <About />

      {/* Sponsors */}
      <Sponsors />

      {/* Companies */}

      <section className="companies">
        <section className="container">
          <section className="companies__content">
            <h2>
              Cohort <span className="text-red">2023</span>
            </h2>
            <p>
              Embedded in the world's top AI ecosystem, our ideation meetups
              with experts and industry leaders generate rich venture theses in
              high-growth sectors.
            </p>
          </section>
          <section className="companies__container">
            <Company
              title="AI Automation Labs"
              src="/companies/a2labs.png"
              link="https://www.authentiai.com/"
            />

            <Company
              title="AiolosX"
              src="/companies/aiolosx.svg"
              link="https://aiolosx.ai/"
            />

            <Company
              title="APE Fitness"
              src="/companies/ape-fitness.png"
              link="https://apefit.io"
            />

            <Company
              title="AuthentiAI"
              src="/companies/authenti.webp"
              link="https://apefit.io"
            />
            <Company
              title="Fortuna-Insights, Inc."
              src="/companies/fortuna.png"
              link="https://casecraft.fortuna-insights.com/"
            />
            <Company
              title="GuidewireRx"
              src="/companies/guidewirerx.png"
              link="http://guidewirerx.com/"
            />
            <Company
              title="LegalEase"
              src="/companies/legalease.webp"
              link="https://www.legalease.chat/"
            />
            <Company
              title="Loamy"
              src="/companies/loamy.webp"
              link="http://localhost:3000/www.loamy.info"
            />
          </section>
          <a href="/companies" className="button">
            View All Companies
          </a>
        </section>
      </section>

      {/* Parallax */}
      <Parallax />

      {/* Stories */}

      <section className="stories">
        <div className="container">
          <div className="stories__header">
            <h2>Stories</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              rutrum massa libero. Curabitur sapien tellus, sodales at nisl at,
              rhoncus cursus odio.
            </p>
          </div>
        </div>

        <div className="container">
          <section className="stories__holder">
            <Story
              title="Feb 8, 2024: AI in the Built World: Architecture, Civil Engg., Construction/Operations"
              src="/stories/latest.jpeg"
              link="https://www.eventbrite.com/e/ai-in-the-built-world-architecture-civil-engg-constructionoperations-tickets-807158882947?aff=oddtdtcreator"
              type="Event"
            />
            <Story
              title="Boston's Women in AI: Igniting Innovation"
              src="/stories/1.webp"
              link="https://gatsby.events/rsvp/bostons-women-of-ai-igniting-innovation/glasswing-ventures/register?progress=1"
              type="Event"
            />
          </section>
        </div>
        <div className="container stories__all">
          <a href="/stories" className="button">
            Read All Stories
          </a>
        </div>
      </section>
    </main>
  );
}
