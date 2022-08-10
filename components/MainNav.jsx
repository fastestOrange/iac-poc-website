import classNames from "classnames/bind";
import genericsStyles from "../styles/generics.module.scss";
import defaultLayoutStyles from "./../layouts/defaultLayout.module.scss";

const styles = { ...genericsStyles, ...defaultLayoutStyles };
const cx = classNames.bind(styles);

const MainNav = ({ navLinks }) => {
  return (
    <nav role="main-nav" className={cx("main-nav-container")}>
      {/*TODO: Create types in schema for creating navigation ? */}
      <ul className={cx("main-nav")}>
        {navLinks.map((link) => (
          <li key={link.slug} className={cx("link-container")}>
            <a href={link.slug} className={cx("primary-link-label")}>
              {link.label}
            </a>
            {link.subLinks.length > 0 && (
              <ul className={cx("dropdown-menu")}>
                {link.subLinks.map((link) => (
                  <li key={link.label}>{link.label}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
