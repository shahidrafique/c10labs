import Banner from "@/components/Banner";
import Member from "../../../components/member";
import { getVenturesPage } from "../../../../api/controllers/venturesPageController";
import Link from "next/link";

export default async function Advisors() {
  const props = await getVenturesPage();

  const {
    banner = {},
    menu: { links = [] } = {},
    peopleSection = {},
  } = props ?? {};

  return (
    <main>
      {/* Banner */}
      <Banner {...banner} />

      {/* Tabs */}

      <section className="tabs">
        <div className="container">
          {links.map(({ title, href = "" }) => (
            <Link
              key={title}
              href={href}
              className={`tab ${
                href === "/team/ventures" ? "tab--active" : ""
              }`}
            >
              {title}
            </Link>
          ))}
        </div>
      </section>

      {/* Section Title */}

      <section className="section-title">
        <div className="container">
          <h2>{peopleSection.title}</h2>
        </div>
      </section>

      {/* Members */}

      <section className="members">
        <div className="container">
          {/* TODO: add linkedin in strapi */}
          {peopleSection.people?.map(
            ({ name, education, designation, linkedin, image }) => (
              <Member
                title={education ? `${name}, ${education}` : name}
                designation={designation}
                src={image?.url}
                linkedin={linkedin}
                key={name}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
}
