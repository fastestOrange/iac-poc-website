import classNames from "classnames/bind";
import styles from "./../styles/generics.module.scss";
import { FaLinkedin } from "react-icons/fa";

const cx = classNames.bind(styles);

const SocialMediaIcons = ({ socials }) => {
  const icons = { linkedIn: <FaLinkedin size={"2rem"} /> };
  console.log("Socials", socials);
  return (
    <div className={cx("social-media")}>
      {socials.map(({ link, type }) => (
        <a href={link}>{icons[type]}</a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
