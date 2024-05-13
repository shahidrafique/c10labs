import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../../scss/styles.scss";

import Header from "../components/header";
import Footer from "../components/footer";
import SetupAnimations from "./setupAnimations";
import Script from "next/script";
import { getHeader } from "@/api/controllers/headerController";

export const metadata = {
  title: "C10 Labs",
  description: "AI VENTURE STUDIO",
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
