import "../../scss/styles.scss";

import SmoothScrolling from "./components/SmoothScrolling";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "C10 Labs",
  description: "AI VENTURE STUDIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrolling>
          <Header />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
