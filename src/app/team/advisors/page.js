import Member from "../../components/member";

export default function Advisors() {
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
          <a href="/team/advisors" className="tab tab--active">
            Advisors and Experts
          </a>
          <a href="/team/ventures" className="tab">
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

      <section className="members">
        <div className="container">
          <Member
            title="Peter Diamandis"
            designation="Singularity University XPRIZE"
            src="/member.png"
            linkedin="linked.com"
          />

          <Member
            title="Wardah Inam, PhD"
            designation="CEO, Overjet CSAIL, MIT"
            src="/advisors/10.webp"
            linkedin="linked.com"
          />
          <Member
            title="Yasser Bashir, PhD"
            designation="Founder & CEO, Arbisoft, Boston Venture GP, CMU"
            src="/advisors/3.webp"
            linkedin="linked.com"
          />
          <Member
            title="Doug Bemis, PhD"
            designation="Uber AI Labs, Redesign Health, Harvard University"
            src="/advisors/4.webp"
            linkedin="linked.com"
          />
          <Member
            title="Mattias Åstrom"
            designation=" Mattias Åstrom Founder CEO Evroc MIT MBA 7x Tech Entrepreneur.
            Sold to Apple, Nokia"
            src="/advisors/24.webp"
            linkedin="linked.com"
          />
          <Member
            title="Simona Tiribelli"
            designation="Director AI Ethics NYC/ Fellow MIT."
            src="/advisors/23.webp"
            linkedin="linked.com"
          />
          <Member
            title="Santanu Bhattacharya, PhD"
            designation="Chief Scientist (Fortune 500) Multiple
            startup exits/IPO Facebook, NASA, MIT"
            src="/advisors/5.webp"
            linkedin="linked.com"
          />
          <Member
            title="Brian Donnelly"
            designation="Product, Boston Dynamics"
            src="/advisors/6.webp"
            linkedin="linked.com"
          />
          <Member
            title="John Dvor"
            designation="EVP, Pluri Board Member - Helge Capital & Agon Ventures"
            src="/advisors/7.webp"
            linkedin="linked.com"
          />
          <Member
            title="Ehsan Hoque, PhD"
            designation="Chief Scientist National AI Center, Saudi Arabia MIT"
            src="/advisors/8.webp"
            linkedin="linked.com"
          />
          <Member
            title="Vidya Setlur, PhD"
            designation="Head of Research, Tableau NLP & Computer Graphics"
            src="/advisors/22.webp"
            linkedin="linked.com"
          />
          <Member
            title="Ahmer Inam"
            designation="Chief AI Officer, Relanto Ex Nike PwC, XPRIZE Forbes Technology
            Council"
            src="/advisors/9.webp"
            linkedin="linked.com"
          />
          <Member
            title="George Kassas"
            designation="Founder, Cedar Point Comm. Advisor to the largest Telcos in the
            world"
            src="/advisors/11.webp"
            linkedin="linked.com"
          />
          <Member
            title="Manolis Kellis, PhD"
            designation="MIT Professor CSAIL, MIT"
            src="/advisors/12.webp"
            linkedin="linked.com"
          />
          <Member
            title="Aditya Khosla, PhD"
            designation="CTO, Iterative Health Co-founder & CTO, PathAI CSAIL, MIT"
            src="/advisors/13.webp"
            linkedin="linked.com"
          />
          <Member
            title="Joan LaRovre, MD/MBA"
            designation="Director of Innovation Boston Children's Harvard Medical"
            src="/advisors/14.webp"
            linkedin="linked.com"
          />
          <Member
            title="Praveen Mandal"
            designation="Venture Partner, Builders VC MIT Connection Science"
            src="/advisors/15.webp"
            linkedin="linked.com"
          />
          <Member
            title="Muntazi Mehdi, PhD"
            designation="Amazon | MSFT Engineering and Science Leader"
            src="/advisors/18.webp"
            linkedin="linked.com"
          />
          <Member
            title="Tobin Moore"
            designation="Founder & CEO, Optoro Unicorn Builder"
            src="/advisors/19.webp"
            linkedin="linked.com"
          />
          <Member
            title="Beth Porter"
            designation="Beth Porter Serial EdTech Entrepreneur VP Product Krach
            Institute Lecturer, Questrom School of Business Boston
            University"
            src="/advisors/20.webp"
            linkedin="linked.com"
          />
          <Member
            title="Ravi Athale"
            designation="Ravi Athale DARPA PM ONR, MITRE"
            src="/advisors/2.webp"
            linkedin="linked.com"
          />
          <Member
            title="Kausar Samli, PhD"
            designation="Creative Destruction Lab Nanobio + Computing Singularity
            University"
            src="/advisors/21.webp"
            linkedin="linked.com"
          />
        </div>
      </section>
    </main>
  );
}
