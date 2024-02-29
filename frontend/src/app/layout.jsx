import { Poppins } from "next/font/google";
import "../../scss/styles.scss";

import Header from "../components/header";
import Footer from "../components/footer";
import SetupAnimations from "./setupAnimations";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <SetupAnimations />
      </body>
    </html>
  );
}
