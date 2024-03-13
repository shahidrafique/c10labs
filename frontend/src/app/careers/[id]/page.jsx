import Markdown from "react-markdown";
import { getPost } from "../../../../api/controllers/postController";
import Link from "next/link";
import MarkdownLink from "@/components/MarkdownLink";

export const metadata = {
  title: "C10 Labs - Careers",
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
            <h1>{title}</h1>
          </div>
          <div className="job-content">
            <Markdown components={{ a: MarkdownLink }}>{content}</Markdown>
          </div>
        </div>
      </div>
    </main>
  );
}
