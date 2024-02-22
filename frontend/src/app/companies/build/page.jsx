import Banner from "@/components/Banner";
import Company from "../../../components/company";
import { getBuildPage } from "../../../../api/controllers/buildPageController";
import Link from "next/link";

export default async function Build() {
  const props = await getBuildPage();

  console.log(props);

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
            <Link href={href} className="tab tab--active">
              {title}
            </Link>
          ))}
        </div>
      </section>

      {companySections.map(({ title, companies }) => (
        <>
          <section className="section-title">
            <div className="container">
              <h2>{title}</h2>
            </div>
          </section>

          <section className="companies companies--inner-page">
            <div className="container">
              <div className="companies__container">
                {companies.map(({ name, image, href = "" }) => (
                  <Company title={name} src={image?.url} link={href} inner />
                ))}
              </div>
            </div>
          </section>
        </>
      ))}
    </main>
  );
}
