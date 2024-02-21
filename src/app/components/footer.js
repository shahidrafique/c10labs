import Image from "next/image";
export default function Header() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <div className="footer__logo">
            <img src="/logo.svg" alt="Vercel Logo" />
          </div>
          <div className="social-media">
            <ul>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer__nav">
            <ul>
              <li>
                <a href="/team">about</a>
              </li>
              <li>
                <a href="/companies">companies</a>
              </li>
              <li>
                <a href="/process">Process</a>
              </li>
              <li>
                <a href="/contact">contact</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="subscribe">
          <div className="subscribe__left">
            <h3>Subscribe newsletter</h3>
            <p>Be the first to recieve all latest post in your inbox</p>
          </div>
          <div className="subscribe__input">
            <input type="text" placeholder="Enter Email Address" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="container copy">
        <div className="left">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="right">
          245 Main St, Cambridge, MA 02142. www.c10labs.com
        </div>
      </div>
    </footer>
  );
}
