import classNames from "classnames/bind";
import styles from "../layouts/defaultLayout.module.scss";
import SocialMediaIcons from "./SocialMediaIcons";

const cx = classNames.bind(styles);
const dummySocialMedia = [
  { type: "twitter", link: "http://www.twitter.com" },
  { type: "instagram", link: "http://www.Instagram.com" },
  { type: "linkedIn", link: "http://www.LinkedIn.com" },
];

const Footer = () => {
  return (
    <section className={cx("footer")}>
      <div className={cx("footer-links")}>
        <ul className={cx("link-col")}>
          <li>Accessibility</li>
          <li>Privacy Policy</li>
          <li>Code of Conduct</li>
          <li>FAQ</li>
        </ul>
        <ul className={cx("link-col")}>
          <li>Contact Us</li>
          <li>Site Feedback</li>
        </ul>
      </div>
      <SocialMediaIcons socials={dummySocialMedia} />
    </section>
  );
};

export default Footer;
