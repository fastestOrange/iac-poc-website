import classNames from "classnames/bind";
import styles from "./buttons.module.scss";

const cx = classNames.bind(styles);

const ButtonLg = ({ link, text }) => {
  return (
    <div className={cx("button-lg-background")}>
      <a href={link}>
        <button className={cx("button-lg")}>{text}</button>
      </a>
    </div>
  );
};

export default ButtonLg;
