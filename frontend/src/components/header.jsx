import Link from "next/link";
import { getHeader } from "../../api/controllers/headerController";
import MenuButton from "@/components/menuButton";
import StrapiImage from "./StrapiImage";
import HeaderMenu from "./HeaderMenu";

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
        <HeaderMenu links={links} />
      </div>
      <MenuButton />
    </header>
  );
}
