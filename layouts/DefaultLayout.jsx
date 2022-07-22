import Header from "../components/Header";
import Link from "next/link";

export function DefaultLayout({ children }) {
  return (
    <div className="container">
      <div className="level">
        <Header />
      </div>
      {/* Temporary links to easily access pages for development */}
      <div className="level-item has-text-centered">
        QUICK LINKS: <Link href="/speakers">Speakers</Link>
      </div>
      <div className="columns">
        <div className="column">
          LEFT HAND
          <br />
          MENU
        </div>
        <div className="column">{children}</div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}
