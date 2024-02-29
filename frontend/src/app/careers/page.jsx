import Banner from "@/components/Banner";
import { getCareerPage } from "../../../api/controllers/careerPageController";
import Markdown from "react-markdown";
import Link from "next/link";
import { getJobs } from "../../../api/controllers/jobsController";

export default async function Careers() {
  const props = await getCareerPage();
  const jobs = await getJobs();

  console.log(jobs, "jobs");

  const { banner = {}, menuTitle = "", content = "" } = props ?? {};

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
