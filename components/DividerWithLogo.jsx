import classNames from "classnames/bind";
import Image from "next/image";
import icon from "../assets/IACIcon.png";
import styles from "../styles/generics.module.scss";

const cx = classNames.bind(styles);

const DividerWithLogo = () => {
  return (
    <div className={cx("divider-with-logo")}>
      <span className={cx("line")}></span>
      <div className={cx("logo-image-container")}>
        <Image
          src={icon}
          alt="The Information Architecture Conference Logo"
          layout="responsive"
          width={70}
          height={70}
        />
      </div>
      <span className={cx("line")}></span>
    </div>
  );
};

export default DividerWithLogo;
