export default function Team() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="banner banner--team">
        <div className="container">
          <div className="banner__content">
            <h1>FOUNDERS</h1>
            <div className="banner__sub-heading">
              C10 LABS is a Cambridge-based venture studio fund transforming the
              future of AI-First startups.
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}

      <div className="container">
        <h2 className="founder-outline">Founders</h2>
        <section className="founder-members">
          <div className="founder-member">
            <div className="founder-member__image">
              <img src="/patricia.jpg" alt="" />
              <div className="intro">
                Patricia has brought innovation to the trenches to solve global
                problems in some of the most difficult regions of the world,
                from mining in Central Africa, to Ebola in West Africa. Having
                managed billions in investments and worked with top world
                leaders, she realized that dimensional AI could help solve some
                of the world's greatest challenges.
              </div>
            </div>
            <div className="founder-member__name">
              <h4>Patricia Geli</h4>
              <p>Founding General Partner & COO</p>
            </div>
          </div>

          <div className="founder-member">
            <div className="founder-member__image">
              <img src="/ramesh.jpg" alt="" />
              <div className="intro">
                Ramesh, an MIT MIT Media Lab Professor, has co-founded multiple
                companies, led venture studios and AI teams at Apple, Facebook
                and Google X. He believes creating strong moat AI-first startups
                will require a new approach.
              </div>
            </div>
            <div className="founder-member__name">
              <h4>Ramesh Raskar</h4>
              <p>Founding Chief Scientist</p>
            </div>
          </div>

          <div className="founder-member">
            <div className="founder-member__image">
              <img src="/shahid.jpg" alt="" />
              <div className="intro">
                Shahid has started four venture backed technology and healthcare
                companies as CEO, and discovered that AI-first company CEOs
                cannot be just tech leaders or business leaders but must become
                dimensional leaders to fully tap the potential.
              </div>
            </div>
            <div className="founder-member__name">
              <h4>Shahid Azim</h4>
              <p>Founding General Partner & CEO</p>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <div className="links">
          <ul>
            <li>
              <a href="/team/advisors">Advisors</a>
            </li>
            <li>
              <a href="/team/ventures">Venture Council</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <section className="founder__content">
          <p>
            C10 Labs founders co-taught the pioneering class{" "}
            <a href="https://aiforimpact.github.io/">
              "AI for Impact: Venture Studio."
            </a>
            This class teaches and draws talent from MIT and Harvard. The
            semester concludes with a{" "}
            <a href="https://www.youtube.com/watch?v=71A8PN-z1rI&feature=youtu.be">
              demo day
            </a>{" "}
            where ideas are judged by more than 20 investors.
          </p>
          <p>
            Old ideas like ‘disruption’ pit incumbent sectoral leaders against
            tech upstarts. The AI revolution fundamentally shifts the game and
            helps industries leapfrog to the next level. To help AI innovators
            and entrepreneurs, three restless immigrants banned together to
            launch C10 Labs. We are a venture studio and fund. We plan to create
            10+ companies each year.
          </p>
        </section>
      </div>
    </main>
  );
}
