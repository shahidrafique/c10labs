import Parallax from "@/components/parallax";
import Sponsors from "@/components/sponsors";
import About from "@/components/about";
import VideoBanner from "@/components/VideoBanner";
import Companies from "@/components/Companies";
import Stories from "@/components/Stories";
import { getHomePage } from "../../api/controllers/homePageController";

export default async function Home() {
  const props = await getHomePage();
  const { mainBanner, about, companySection, banner, storySection, sponsors } =
    props;

  return (
    <main>
      <VideoBanner {...mainBanner} />
      <About {...about} />
      <Sponsors logos={sponsors} />
      <Companies {...companySection} />
      <Parallax {...banner} />
      <Stories {...storySection} />
    </main>
  );
}
