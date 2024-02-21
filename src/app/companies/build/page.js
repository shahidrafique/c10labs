export default function Build() {
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
          <a href="/companies" className="tab">
            Cohorts
          </a>
          <a href="/companies/build" className="tab  tab--active">
            Build
          </a>
        </div>
      </section>

      <section className="section-title">
        <div className="container">
          <h2>Project B-1</h2>
        </div>
      </section>
    </main>
  );
}
