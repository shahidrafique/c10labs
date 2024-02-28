import Link from "next/link";
import { getHeader } from "../../api/controllers/headerController";
import MenuButton from "@/components/menuButton";
import StrapiImage from "./StrapiImage";

export default async function Header() {
  const props = await getHeader();
  const { menu: { links = [], image } = {} } = props ?? {};

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <StrapiImage src={image?.url} alt="C10 Labs" />
          </Link>
        </div>
        <ul className="nav">
          {links.map(({ title, href = "" }) => (
            <li key={href}>
              <Link href={href} className="nav__item">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <MenuButton />
    </header>
  );
}
