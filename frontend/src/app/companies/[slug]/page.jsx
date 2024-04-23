import Company from "../../../components/company";
import { Fragment } from "react";
import { getCompaniesPage } from "../../../../api/controllers/companiesPageController";

export const metadata = {
  title: "C10 Labs - Companies - Build",
};

export default async function CompaniesSection({ params: { slug = "" } }) {
  const [{ companySections = [], content }] = await getCompaniesPage(slug);

  return companySections.length === 0
    ? content
    : companySections.map(({ title, companies }) => (
        <Fragment key={title}>
          <section className="section-title">
            <div className="container">
              <h2>{title}</h2>
            </div>
          </section>

          <section className="companies companies--inner-page">
            <div className="container">
              <div className="companies__container">
                {companies.length === 0 ? <p>Coming soon</p> : null}
                {companies?.map(({ name, image, href = "" }) => (
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
        </Fragment>
      ));
}
