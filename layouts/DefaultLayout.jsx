import Header from "../components/Header";
import Link from "next/link";
import { getAuth } from "firebase/auth"; // Firebase v9+
import { AuthProvider, useFirebaseApp } from "reactfire";

export function DefaultLayout({ children }) {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return (
    <AuthProvider sdk={auth}>
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
        </div>
        <div className="level-item has-text-centered">QUICK LINKS</div>
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
    </AuthProvider>
  );
}
