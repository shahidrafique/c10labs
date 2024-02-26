import Banner from "@/components/Banner";
import { getStoriesPage } from "../../../api/controllers/storiesPageController";
import Stories from "@/components/Stories";

export default async function StoriesPage() {
  const props = await getStoriesPage();
  const { banner = {}, stories = [] } = props ?? {};

  return (
    <main>
      <Banner {...banner} />
      <Stories stories={stories} inner />
    </main>
  );
}
