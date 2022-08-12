import classNames from "classnames/bind";
import ButtonMd from "../buttons/ButtonMd";
import styles from "./cards.module.scss";

const cx = classNames.bind(styles);

const CTACard = ({ title, text, ctaText, link }) => {
  return (
    <div className={cx("cta-card")}>
      <p className={cx("cta-title")}>{title}</p>
      <p className={cx("description")}>{text}</p>
      <ButtonMd link={link} text={ctaText} />
    </div>
  );
};

export default CTACard;
