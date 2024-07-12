import Banner from "@/components/Banner";
import { getStoriesPage } from "../../../api/controllers/storiesPageController";
import Stories from "@/components/Stories";

export const metadata = {
  title: "C10 Labs: Stories",
  alternates: {
    canonical: "/stories",
  },
};

export default async function StoriesPage() {
  const props = await getStoriesPage();
  const { banner = {}, stories = [] } = props ?? {};

  return (
    <main>
      <Banner {...banner} />
      <Stories stories={stories} inner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context":"http://schema.org",
            "@type":"ItemList",
            "name":"Latest Stories",
            "numberOfItems": ${stories.length},
            "itemListOrder":"Descending",
            "itemListElement":${JSON.stringify(
              stories.map(({ title, href }, i) => ({
                "@id": href,
                "@type": "Article",
                position: i + 1,
                headline: title,
              }))
            )}
        }
      `,
        }}
      />
    </main>
  );
}
