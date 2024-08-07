import Banner from "@/components/Banner";
import { getAdvisorsPage } from "../../../../api/controllers/advisorsPageController";
import Member from "../../../components/member";

export const metadata = {
  title: "C10 Labs: Advisors",
  alternates: {
    canonical: "/teams/advisors",
  },
};

export default async function Advisors() {
  const props = await getAdvisorsPage();

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

      {/* <section className="tabs">
        <div className="container">
          {links.map(({ title, href = "" }) => (
            <Link
              key={href}
              href={href}
              className={`tab ${
                href === "/team/advisors" ? "tab--active" : ""
              }`}
            >
              {title}
            </Link>
          ))}
        </div>
      </section> */}

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
          {peopleSection.people.map(
            ({ name, education, designation, linkedin, image }) => (
              <Member
                key={name}
                title={education ? `${name}, ${education}` : name}
                designation={designation}
                src={image?.url}
                linkedin={linkedin}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
}
