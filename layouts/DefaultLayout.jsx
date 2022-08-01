import Link from "next/link";
import { getAuth } from "firebase/auth"; // Firebase v9+
import { AuthProvider, FirebaseAppProvider, useFirebaseApp } from "reactfire";

import classNames from "classnames/bind";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./defaultLayout.module.scss";

const cx = classNames.bind(styles);

const firebaseConfig = {
  apiKey: "AIzaSyCvapodXG0DHiW3SebX8MrOyDms5RcC1mM",
  authDomain: "ioc-poc-a3533.firebaseapp.com",
  projectId: "ioc-poc-a3533",
  storageBucket: "ioc-poc-a3533.appspot.com",
  messagingSenderId: "248607905999",
  appId: "1:248607905999:web:f7c340f4346552c9bb7fba"
};

export function DefaultLayout({ children }) {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <AuthProvider sdk={auth}>
      <div className={cx("layout-container")}>
        <Header />

        {/* Temporary links to easily access pages for development */}
        <section className={cx("quick-links")}>
          QUICK LINKS: <Link href="/speakers">Speakers</Link>
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
    </FirebaseAppProvider>

  );
}