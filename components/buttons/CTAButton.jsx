import classNames from "classnames/bind";
import styles from "./buttons.module.scss";

const cx = classNames.bind(styles);


const CTAButton = ({ link, text, type = "primary" }) => {
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

export default CTAButton;
