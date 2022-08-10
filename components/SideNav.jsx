import classNames from "classnames/bind";
import styles from "./../pages/events/events.module.scss";

const cx = classNames.bind(styles);

const SideNav = () => {
  return (
    <nav role="sub-nav" className={cx("side-nav-container")}>
      {/*TODO: Create types in schema for creating navigation ? */}
      {/*TODO: Replace header with abbreviated name variable */}
      <h3 className={cx("side-nav-header")}>IAC22 Home</h3>
      <ul className={cx("side-nav")}>
        <li>Conference Theme</li>
        <li>Tickets and Registration</li>
        <li>Workshops</li>
        <li>Main Conference</li>
        <li>Program</li>
        <li>Conference Updates</li>
        <li>Conference Team</li>
      </ul>
    </nav>
  );
};
export default SideNav;
