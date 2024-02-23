import "../../scss/styles.scss";

import Header from "../components/header";
import Footer from "../components/footer";

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
        <script src="https://unpkg.co/gsap@3/dist/gsap.min.js" />
        <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js" />
        <script src="https://unpkg.com/@studio-freight/lenis@1.0.34/dist/lenis.min.js" />
        <script src="/lenis-init.js" />
      </body>
    </html>
  );
}
