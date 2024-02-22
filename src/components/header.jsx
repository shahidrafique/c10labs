import Link from "next/link";
import { getHeader } from "../../api/controllers/headerController";
import StrapiImage from "./StrapiImage";

export default async function Header() {
  const props = await getHeader();
  const { menu: { links = [], image } = {} } = props ?? {};

  return (
    <header className="header header--dark">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <StrapiImage src={image?.url} alt="Vercel Logo" />
          </Link>
        </div>
        <ul className="nav">
          {links.map(({ title, href = "" }) => (
            <li>
              <Link href={href} className="nav__item">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
