import Banner from "@/components/Banner";
import { getStoriesPage } from "../../../api/controllers/storiesPageController";
import Stories from "@/components/Stories";
import Head from "next/head";

export const metadata = {
  title: "C10 Labs - Stories",
};

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
