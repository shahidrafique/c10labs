import Company from "../components/company";

export default function Companies() {
  return (
    <main>
      {/* banner */}
      <section class="banner banner--companies">
        <div class="container">
          <div class="banner__content">
            <h1>
              Think Big. Spot-Probe.
              <br />
              <span>Set Course.</span>
            </h1>
            <div class="banner__sub-heading">
              Embedded in the world's top AI ecosystem, our ideation meetups
              with experts and industry leaders generate rich venture theses in
              high-growth sectors.
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section class="tabs tabs--companies">
        <div class="container">
          <a href="/companies" class="tab tab--active">
            Cohorts
          </a>
          <a href="/companies/build" class="tab">
            Build
          </a>
        </div>
      </section>

      <section class="section-title">
        <div class="container">
          <h2>Fall'23</h2>
        </div>
      </section>

      {/* Companies */}

      <section class="companies companies--inner-page">
        <div class="container">
          <div class="companies__container">
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
      <section class="section-title">
        <div class="container">
          <h2>Spring'23</h2>
        </div>
      </section>
      <section class="companies companies--inner-page">
        <div class="container">
          <div class="companies__container">Coming soon</div>
        </div>
      </section>
    </main>
  );
}
