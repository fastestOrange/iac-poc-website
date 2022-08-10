import classNames from "classnames/bind";
import styles from "../styles/generics.module.scss";

const cx = classNames.bind(styles);

//TODO: add css
const DividerVertical = () => {
  return <span className={cx("divider-vertical")}></span>;
};

export default DividerVertical;
