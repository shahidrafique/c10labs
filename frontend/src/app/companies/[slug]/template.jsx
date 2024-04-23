"use client";

import Banner from "@/components/Banner";
import Link from "next/link";
import { getCompaniesPageHeader } from "../../../../api/controllers/companyHeaderController";
import { useParams } from "next/navigation";

export default async function Layout({ children }) {
  const { slug } = useParams();
  const { banner = {}, menu: { links = [] } = {} } =
    await getCompaniesPageHeader();

  return (
    <main>
      <Banner {...banner} />
      <section className="tabs tabs--companies">
        <div className="container">
          {links.map(({ title, href = "" }, i) => (
            <Link
              key={href}
              href={href}
              className={`tab ${href.endsWith(slug) ? "tab--active" : ""}`}
            >
              {title}
            </Link>
          ))}
        </div>
      </section>
      {children}
    </main>
  );
}
