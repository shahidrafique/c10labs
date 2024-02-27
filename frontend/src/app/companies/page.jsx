import Banner from "@/components/Banner";
import { getCompaniesPage } from "../../../api/controllers/companiesPageController";
import Company from "../../components/company";
import Link from "next/link";

export default async function Companies() {
  const props = await getCompaniesPage();
  const {
    banner,
    menu: { links },
    companySections,
  } = props;

  return (
    <main>
      <Banner {...banner} />

      {/* Tabs */}
      <section className="tabs tabs--companies">
        <div className="container">
          {links.map(({ title, href = "" }) => (
            <Link
              key={title}
              href={href}
              className={`tab ${href === "/companies" ? "tab--active" : ""}`}
            >
              {title}
            </Link>
          ))}
        </div>
      </section>

      {companySections.map(({ title, companies }) => (
        <>
          <section className="section-title" key={title}>
            <div className="container">
              <h2>{title}</h2>
            </div>
          </section>

          <section className="companies companies--inner-page">
            <div className="container">
              <div className="companies__container">
                {companies.map(({ name, image, href = "" }) => (
                  <Company
                    key={name}
                    title={name}
                    src={image?.url}
                    link={href}
                    inner
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      ))}
    </main>
  );
}
