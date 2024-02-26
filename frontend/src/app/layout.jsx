import "../../scss/styles.scss";

import Header from "../components/header";
import Footer from "../components/footer";
import Script from "next/script";

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
        <Script
          strategy="beforeInteractive"
          src="https://unpkg.co/gsap@3/dist/gsap.min.js"
        />
        <Script
          strategy="beforeInteractive"
          src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"
        />
        <Script src="https://unpkg.com/@studio-freight/lenis@1.0.34/dist/lenis.min.js" />
        <Script src="/lenis-init.js" />
      </body>
    </html>
  );
}
