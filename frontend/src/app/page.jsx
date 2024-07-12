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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "C10 Labs",
              "url": "https://c10labs.com/",
              "logo": "https://admin.c10labs.com/uploads/logo_3d6f8cb795.svg",
              "sameAs": [
                "https://www.linkedin.com/company/c10labs/",
                "https://twitter.com/c10labs"
              ]
            }`,
        }}
      />
    </main>
  );
}
