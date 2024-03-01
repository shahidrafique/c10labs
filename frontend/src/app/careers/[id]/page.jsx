import Markdown from "react-markdown";
import { getPost } from "../../../../api/controllers/postController";
import Link from "next/link";

export const metadata = {
  title: "Careers",
};

export default async function Post({ params: { id } }) {
  const props = await getPost(id);
  const [{ title = "", content = "" } = {}] = props ?? [];

  return (
    <main>
      <div className="jobs jobs--inner">
        <div className="container">
          <div className="job-title">
            <Link href="/careers" className="btn-back">
              <img src="/back-arrow.svg" alt="back to listing" />
              Jobs listing
            </Link>
            {title}
          </div>
          <div className="job-content">
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </div>
    </main>
  );
}
