import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../../scss/styles.scss";

import Header from "../components/header";
import Footer from "../components/footer";
import SetupAnimations from "./setupAnimations";
import Script from "next/script";
import { getHeader } from "@/api/controllers/headerController";

export const metadata = {
  metadataBase: new URL("https://c10labs.com"),
  title: "C10 Labs: Innovating the Future of AI Ventures",
  keywords:
    "AI,Venture Studio,Venture Capital,VC,Cambridge,Startups,Early-Stage,Boston,AI Accelerator,AI Fund,AI Innovation Hub ,AI-First VC,AI Enablement,AI Investments,Dimensional AI ,AI Massachusetts,AI Community Boston,Future of AI Boston,Future of AI Startups,Upcoming AI Events Boston",
  description:
    "Leading AI venture studio fund creating impactful AI-first ventures. Join our ecosystem to accelerate your startup with expert technology and operational support.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "/",
    title: "C10 Labs: Innovating the Future of AI Ventures",
    description:
      "Leading AI venture studio fund creating impactful AI-first ventures. Join our ecosystem to accelerate your startup with expert technology and operational support.",
    siteName: "C10 Labs",
    images: [
      {
        url: "/favicon.png",
      },
    ],
  },
  twitter: {
    site: "@c10labs",
    images: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
};

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export default async function RootLayout({ children }) {
  const props = await getHeader();
  return (
    <html lang="en" className={font.variable}>
      <body>
        <Header {...props} />
        {children}
        <Footer />
        <SetupAnimations />
        <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/44606217.js"
        />
        <GoogleAnalytics gaId="G-WX56FQ4CJW" />
      </body>
    </html>
  );
}
