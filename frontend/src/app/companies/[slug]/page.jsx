import Company from "../../../components/company";
import { Fragment } from "react";
import { getCompaniesPage } from "../../../../api/controllers/companiesPageController";
import Markdown from "react-markdown";

const metadata = {
  title: "C10 Labs: Companies - Build",
};

export function generateMetada({ params: { id } }) {
  return {
    ...metadata,
    alternates: {
      canonical: `/careers/${id}`,
    },
  };
}

export default async function CompaniesSection({ params: { slug = "" } }) {
  const [{ companySections = [] }] = await getCompaniesPage(slug);

  return companySections.map(({ title, content, companies = [] }) => (
    <Fragment key={title}>
      <section className="section-title">
        <div className="container">
          <h2>{title}</h2>
        </div>
      </section>

      <section className="companies companies--inner-page">
        <div className="container">
          <div className="companies__container">
            {companies.length === 0 ? (
              <div>
                <Markdown>{content}</Markdown>
              </div>
            ) : (
              companies.map(({ name, image, href = "", description }) => (
                <Company
                  key={name}
                  title={name}
                  description={description}
                  src={image?.url}
                  link={href}
                  inner
                />
              ))
            )}
          </div>
        </div>
      </section>
    </Fragment>
  ));
}
