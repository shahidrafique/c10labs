import Banner from "@/components/Banner";
import Founders from "@/components/Founders";
import { getTeamPage } from "../../../api/controllers/teamPageController";
import Markdown from "react-markdown";
import Link from "next/link";

export default async function Team() {
  const props = await getTeamPage();
  const {
    banner = {},
    menu: { links = [] } = {},
    founders = [],
    content = "",
  } = props ?? {};

  return (
    <main>
      <Banner {...banner} />
      <Founders founders={founders} />
      <div className="container">
        <div className="links">
          <ul>
            {links.map(({ href = "", title = "" }) => (
              <li key={href}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container">
        <section className="founder__content">
          <Markdown>{content}</Markdown>
        </section>
      </div>
    </main>
  );
}
