import classNames from "classnames/bind";
import styles from "./buttons.module.scss";

const cx = classNames.bind(styles);

const ButtonMd = ({ link, text, type }) => {
  return (
    <a href={link}>
      <button
        className={cx({
          "button-cta": true,
          primary: type == "primary",
          secondary: type == "secondary",
        })}
      >
        {text}
      </button>
    </a>
  );
};

export default ButtonMd;
