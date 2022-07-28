import classNames from "classnames/bind";
import styles from "../layouts/defaultLayout.module.scss";

const cx = classNames.bind(styles);
const Footer = () => {
  return <section className={cx("footer")}>Footer</section>;
};

export default Footer;
