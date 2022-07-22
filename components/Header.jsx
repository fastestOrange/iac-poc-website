import Image from "next/image";
import icon from "../assets/IACIcon.png";
import classNameNames from "classnames/bind";
import styles from "../layouts/defaultLayout.module.scss";
import { useUser } from 'reactfire';
const cx = classNameNames.bind(styles);

const Header = () => {
  const { data: user } = useUser();
  return (
    <section className={cx("header")}>
      <nav
        className={cx("navbar")}
        role="navigation"
        aria-label="main navigation"
      >
        <div className={cx("navbar-brand")}>
          <a className={cx("navbar-item")} href="/">
            <div className={cx("logo-image-container")}>
              <Image
                src={icon}
                alt="The Information Architecture Conference Logo"
                layout="responsive"
                width={70}
                height={70}
              />
            </div>
            <div className={cx("logo-text")}>
              <span className={cx("logo-word")}>Information</span>{" "}
              <span className={cx("logo-word")}>Architecture</span>{" "}
              <span className={cx("logo-word")}>Conference</span>
            </div>
          </a>
          <a
            role="button"
            className={cx("navbar-burger")}
            aria-label="menu"
            aria-expanded="false"
            data-target="iacNavbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="iacNavbar" className={cx("navbar-menu")}>
          <div className={cx("navbar-end")}>
            {user ? user?.displayName: (<a className={cx("navbar-item button is-light")} href="/login">
              Log in
            </a>)}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
