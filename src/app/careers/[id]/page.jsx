import Markdown from "react-markdown";
import { getPost } from "../../../../api/controllers/postController";

export default async function Post({ params: { id } }) {
  const props = await getPost(id);
  const [{ title, content }] = props;

  return (
    <main>
      <div className="jobs jobs--inner">
        <div className="container">
          <div className="job-title">{title}</div>
          <div className="job-content">
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </div>
    </main>
  );
}
