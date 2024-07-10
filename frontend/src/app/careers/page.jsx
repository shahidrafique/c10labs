import Banner from "@/components/Banner";
import { getCareerPage } from "../../../api/controllers/careerPageController";
import Markdown from "react-markdown";
import Link from "next/link";
import { getJobs } from "../../../api/controllers/jobsController";
import MarkdownLink from "@/components/MarkdownLink";

export const metadata = {
  title: "C10 Labs: Careers",
  alternates: {
    canonical: "/careers",
  },
};

export default async function Careers() {
  const props = await getCareerPage();
  const jobs = await getJobs();

  const { banner = {}, menuTitle = "", content = "" } = props ?? {};

  return (
    <main>
      <Banner {...banner} />

      {/* Careers List */}

      <section className="jobs">
        <div className="container">
          <div className="page-content">
            <Markdown components={{ a: MarkdownLink }}>{content}</Markdown>
          </div>

          <p>{menuTitle}</p>

          <div className="list">
            <ul>
              {jobs?.map(({ title, slug }) => (
                <li key={title}>
                  <Link href={`/careers/${slug}`}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
