import Banner from "@/components/Banner";
import { getCareerPage } from "../../../api/controllers/careerPageController";
import Markdown from "react-markdown";
import Link from "next/link";

export default async function Careers() {
  const props = await getCareerPage();
  const {
    banner,
    menu: { links },
    menuTitle,
    content = "",
  } = props;

  return (
    <main>
      <Banner {...banner} />

      {/* Careers List */}

      <section className="jobs">
        <div className="container">
          <div className="page-content">
            <Markdown>{content}</Markdown>
          </div>

          <p>{menuTitle}</p>

          <div className="list">
            <ul>
              {links.map(({ title, href = "" }) => (
                <li key={href}>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
