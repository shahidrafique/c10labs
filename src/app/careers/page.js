export default function Careers() {
  return (
    <main>
      {/* Banner */}

      <section className="banner banner--careers">
        <div className="container">
          <div className="banner__content">
            <h1>
              Join <span>Us</span>
            </h1>
            <div className="banner__sub-heading">
              Ready to shape the future of AI?
            </div>
          </div>
        </div>
      </section>

      {/* Careers List */}

      <section className="jobs">
        <div className="container">
          <div className="page-content">
            <p>
              At C10 Labs, we're launching industry-defining AI companies and
              your expertise, whether in research, strategy, entrepreneurship,
              or investment, will be pivotal in building their technologies and
              shaping their trajectories. If a vibrant culture, impactful work,
              and collaborating with brilliant minds in areas like climate tech
              and health resonate with you, let's shape humanity’s future
              together!
            </p>
          </div>

          <p>Available Roles</p>

          <div className="list">
            <ul>
              <li>
                <a href="/careers/ai-fellow">AI Fellow</a>
              </li>
              <li>
                <a href="/careers/operating-partner">Operating Partner</a>
              </li>
              <li>
                <a href="/careers/venture-associate">Venture Associate</a>
              </li>
              <li>
                <a href="/careers/eir">Entrepreneur in Residence</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
