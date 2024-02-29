import Link from "next/link";
import { getFooter } from "../../api/controllers/footerController";
import StrapiImage from "./StrapiImage";
import Form from "./Form";

export default async function Header() {
  const props = await getFooter();
  const { newsLetter = {}, menus = [], address = "", background } = props ?? {};

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__left">
          <div className="footer__logo">
            <StrapiImage src={menus[0].image?.url} alt="Vercel Logo" />
          </div>
          <div className="social-media">
            <ul>
              <li>
                <Link
                  href="https://www.linkedin.com/company/c10labs/"
                  target="_blank"
                >
                  <img src="/linked-in.png" alt="Linked In" />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/c10labs" target="_blank">
                  <img src="/twitter.png" alt="Twitter" />
                </Link>
              </li>
              <li>
                <Link href="https://medium.com/c10labs" target="_blank">
                  <img src="/medium.png" alt="Medium" />
                </Link>
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
            <Form
              region="na1"
              portalId="44606217"
              formId="9021f928-f0f9-4cd8-a1ab-6cea0fbbd4b2"
              css="form {display: flex} input {position: relative} input[type=submit] {padding: 1rem}"
            />
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
