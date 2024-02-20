export default function Ventures() {
  return (
    <main>
      {/* Banner */}
      <section className="banner banner--team">
        <div className="container">
          <div className="banner__content">
            <h1>
              OUR PEOPLE
              <img src="/c10-logo.svg" className="c10" alt="" />
            </h1>
            <div className="banner__sub-heading">
              C10 LABS is a Cambridge-based venture studio fund transforming the
              future of AI-First startups.
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}

      <section className="tabs">
        <div className="container">
          <a href="/team/advisors" className="tab">
            Advisors and Experts
          </a>
          <a href="/team/ventures" className="tab  tab--active">
            Venture Council
          </a>
        </div>
      </section>

      {/* Section Title */}
      <section className="section-title">
        <div className="container">
          <h2>Advisors and Domain Experts</h2>
        </div>
      </section>

      {/* Members */}

      <section class="members">
        <div class="container">
          <div class="member">
            <div class="member__image">
              <img src="/venture/1.webp" alt="" />
            </div>
            <div class="member__content">
              <div class="member__content__name">David Blundin</div>
              <div class="member__content__designation">
                Chairman, EverQuote Link Ventures, 4x Unicorn CEO, MIT
              </div>
              <a href="#" class="member__content__linked"></a>
            </div>
          </div>

          <div class="member">
            <div class="member__image">
              <img src="/venture/3.webp" alt="" />
            </div>
            <div class="member__content">
              <div class="member__content__name">John Harthorne</div>
              <div class="member__content__designation">
                Founder & MD, Two Lanterns VC Founder MassChallenge, MIT Sloan
              </div>
              <a href="#" class="member__content__linked"></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
