import Link from "next/link";
import { getAuth } from "firebase/auth"; // Firebase v9+
import { AuthProvider, useFirebaseApp } from "reactfire";

import classNames from "classnames/bind";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./defaultLayout.module.scss";

const cx = classNames.bind(styles);

export function DefaultLayout({ children }) {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return (
  
    <AuthProvider sdk={auth}>
      <div className={cx("layout-container")}>
        <Header />

        {/* Temporary links to easily access pages for development */}
        <section className={cx("quick-links")}>
          QUICK LINKS: <Link href="/speakers">Speakers</Link> <Link href="/events">Events</Link>
        </section>

        <section className={cx("body")}>
          <div className={cx("left-menu")}>
            LEFT HAND
            <br />
            MENU
          </div>
          {/* TODO: Move title here and pass prop? */}
          <div className={cx("content")}>{children}</div>
        </section>
        <Footer />
      </div>
      
    </AuthProvider>
    
  

  );
}