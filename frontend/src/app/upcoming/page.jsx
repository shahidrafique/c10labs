import Banner from "@/components/Banner";
import { getUpcomingPage } from "@/api/controllers/getUpcomingPageController";
import Markdown from "react-markdown";

export const metadata = {
  title: "C10 Labs: Upcoming",
  alternates: {
    canonical: "/upcoming",
  },
};

export default async function UpcomingPage() {
  const { banner, iframeLink, content } = await getUpcomingPage();

  return (
    <main>
      <Banner {...banner} />
      <div className="iframe">
        <div className="container">
          <iframe
            className="airtable-embed"
            src={iframeLink}
            width="100%"
            height="100%"
            style={{ background: "transparent", border: "1px solid #ccc" }}
          />
        </div>
      </div>
      <div className="upcoming_content">
        <div className="container">
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </main>
  );
}
