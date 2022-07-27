import Image from "next/image";
import icon from "../assets/IACIcon.png";
import classNames from "classnames/bind";
import styles from "../layouts/defaultLayout.module.scss";
import { useUser } from "reactfire";

const cx = classNames.bind(styles);

const Header = () => {
  const { data: user } = useUser();
  return (
    <nav
      className={cx("navbar")}
      role="navigation"
      aria-label="main navigation"
    >
      <a href="/">
        <div className={cx("navbar-brand")}>
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
        </div>
      </a>

      <div className={cx("navbar-end")}>
        {user ? (
          user?.displayName
        ) : (
          // TODO replace this with a styled button component
          <a className={cx("button")} href="/login">
            Log in
          </a>
        )}
      </div>
    </nav>
  );
};

export default Header;
