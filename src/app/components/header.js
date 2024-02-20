import Image from "next/image";

export default function Header() {
  return (
    <header className="header header--dark">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="/c10-logo.svg" alt="Vercel Logo" />
          </a>
        </div>
        <ul className="nav">
          <li>
            <a href="/team" className="nav__item">
              Our Team
            </a>
          </li>
          <li>
            <a href="/companies" className="nav__item">
              Companies
            </a>
          </li>
          <li>
            <a href="/process" className="nav__item">
              Process
            </a>
          </li>
          <li>
            <a href="/stories" className="nav__item">
              Stories
            </a>
          </li>
          <li>
            <a href="/contact" className="nav__item">
              Contact
            </a>
          </li>
          <li>
            <a href="/careers" className="nav__item">
              Careers
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
