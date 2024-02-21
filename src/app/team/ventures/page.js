import Member from "../../components/member";
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
          <h2>Venture Council</h2>
        </div>
      </section>

      {/* Members */}

      <section className="members">
        <div className="container">
          <Member
            title="David Blundin"
            designation="Chairman, EverQuote Link Ventures, 4x Unicorn CEO, MIT"
            src="/venture/1.webp"
            linkedin="linked.com"
          />
          <Member
            title="John Harthorne"
            designation="Founder & MD, Two Lanterns VC Founder MassChallenge, MIT Sloan"
            src="/venture/3.webp"
            linkedin="linked.com"
          />
        </div>
      </section>
    </main>
  );
}
