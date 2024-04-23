"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function CompaniesNav({ links }) {
  const { slug } = useParams();

  return (
    <section className="tabs tabs--companies">
      <div className="container">
        {links.map(({ title, href = "" }) => (
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
  );
}
