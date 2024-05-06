import Banner from "@/components/Banner";
import { getUpcomingPage } from "@/api/controllers/getUpcomingPageController";

export default async function UpcomingPage() {
  const { banner, iframeLink } = await getUpcomingPage();

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
    </main>
  );
}
