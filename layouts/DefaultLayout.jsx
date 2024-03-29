import Link from "next/link";
import classNames from "classnames/bind";
import { mainNavLinks } from "../constants/dummyData";
import Header from "../components/Header";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import styles from "./defaultLayout.module.scss";
import { getAuth } from "firebase/auth"; // Firebase v9+
import { AuthProvider, useFirebaseApp } from "reactfire";

const cx = classNames.bind(styles);

export function DefaultLayout({ children }) {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return (
    <AuthProvider sdk={auth}>
      <div className={cx("layout-container")}>
        <Header />
        {/* Temporary links to easily access pages for development */}
        <MainNav navLinks={mainNavLinks} />
        <section className={cx("body")}>
          {/* TODO: Move title here and pass prop? */}
          <div className={cx("content")}>{children}</div>
        </section>
        <Footer />
      </div>
    </AuthProvider>
  );
}
