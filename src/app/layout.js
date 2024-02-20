import "../../scss/styles.scss";
// import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "C10 Labs",
  description: "AI VENTURE STUDIO",
};

// const lenis = useLenis(({ scroll }) => {
//   // called every scroll
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
