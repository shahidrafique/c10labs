import Link from "next/link";
import { getFooter } from "../../api/controllers/footerController";
import StrapiImage from "./StrapiImage";

export default async function Header() {
  const props = await getFooter();
  const { newsLetter = {}, menus = [], address = "", background } = props ?? {};

  return (
    <footer className="footer" style={{ background: background?.url }}>
      <div className="container">
        <div className="footer-left">
          <div className="footer__logo">
            <StrapiImage src={menus[0].image?.url} alt="Vercel Logo" />
          </div>
          <div className="social-media">
            <ul>
              <li>
                <Link href="#"></Link>
              </li>
              <li>
                <Link href="#"></Link>
              </li>
              <li>
                <Link href="#"></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer__nav">
            <ul>
              {menus[0].links.map(({ title, href = "" }) => (
                <li key={href}>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="subscribe">
          <div className="subscribe__left">
            <h3>{newsLetter.title}</h3>
            <p>{newsLetter.subtitle}</p>
          </div>
          <div className="subscribe__input">
            {/* <script
              charset="utf-8"
              type="text/javascript"
              src="//js.hsforms.net/forms/embed/v2.js"
            ></script> */}
            {/* <script src="/contact-form.js"></script> */}
            <input type="text" placeholder={newsLetter.placeholder} />
            <button>{newsLetter.buttonText}</button>
          </div>
        </div>
      </div>
      <div className="container copy">
        <div className="left">
          {menus[1]?.links.map(({ title, href = "" }) => (
            <Link key={href} href={href}>
              {title}
            </Link>
          ))}
        </div>
        <div className="right">{address}</div>
      </div>
    </footer>
  );
}
