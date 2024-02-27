import "../../scss/styles.scss";

import Header from "../components/header";
import Footer from "../components/footer";
import SetupAnimations from "./setupAnimations";

export const metadata = {
  title: "C10 Labs",
  description: "AI VENTURE STUDIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <SetupAnimations />
      </body>
    </html>
  );
}
