import Company from "../components/company";

export default function Companies() {
  return (
    <main>
      {/* banner */}
      <section className="banner banner--companies">
        <div className="container">
          <div className="banner__content">
            <h1>
              Think Big. Spot-Probe.
              <br />
              <span>Set Course.</span>
            </h1>
            <div className="banner__sub-heading">
              Embedded in the world's top AI ecosystem, our ideation meetups
              with experts and industry leaders generate rich venture theses in
              high-growth sectors.
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="tabs tabs--companies">
        <div className="container">
          <a href="/companies" className="tab tab--active">
            Cohorts
          </a>
          <a href="/companies/build" className="tab">
            Build
          </a>
        </div>
      </section>

      <section className="section-title">
        <div className="container">
          <h2>Fall'23</h2>
        </div>
      </section>

      {/* Companies */}

      <section className="companies companies--inner-page">
        <div className="container">
          <div className="companies__container">
            <Company
              title="AI Automation Labs"
              src="/companies/a2labs.png"
              link="https://www.authentiai.com/"
              inner
            />

            <Company
              title="AiolosX"
              src="/companies/aiolosx.svg"
              link="https://aiolosx.ai/"
              inner
            />

            <Company
              title="APE Fitness"
              src="/companies/ape-fitness.png"
              link="https://apefit.io"
              inner
            />

            <Company
              title="AuthentiAI"
              src="/companies/authenti.webp"
              link="https://apefit.io"
              inner
            />
            <Company
              title="Fortuna-Insights, Inc."
              src="/companies/fortuna.png"
              link="https://casecraft.fortuna-insights.com/"
              inner
            />
            <Company
              title="GuidewireRx"
              src="/companies/guidewirerx.png"
              link="http://guidewirerx.com/"
              inner
            />
            <Company
              title="LegalEase"
              src="/companies/legalease.webp"
              link="https://www.legalease.chat/"
              inner
            />
            <Company
              title="Loamy"
              src="/companies/loamy.webp"
              link="http://localhost:3000/www.loamy.info"
              inner
            />
            <Company
              title="QualiVerse/QMB"
              src="/companies/qualiverse.webp"
              link="https://www.qmbdevices.com/"
              inner
            />
            <Company
              title="terraFlow"
              src="/companies/terraflow.webp"
              link="https://www.terraflow.app"
              inner
            />
            <Company
              title="Vocadian"
              src="/companies/vocadian.png"
              link="https://www.vocadian.ai/"
              inner
            />
          </div>
        </div>
      </section>
      <section className="section-title">
        <div className="container">
          <h2>Spring'23</h2>
        </div>
      </section>
      <section className="companies companies--inner-page">
        <div className="container">
          <div className="companies__container">Coming soon</div>
        </div>
      </section>
    </main>
  );
}
