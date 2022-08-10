import classNames from "classnames/bind";
import styles from "./buttons.module.scss";

const cx = classNames.bind(styles);

const ButtonMd = ({ link, text }) => {
  return (
    <a href={link}>
      <button className={cx("button-md")}>{text}</button>
    </a>
  );
};

export default ButtonMd;
