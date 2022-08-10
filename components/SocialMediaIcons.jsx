import classNames from "classnames/bind";
import styles from "./../styles/generics.module.scss";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const cx = classNames.bind(styles);

const SocialMediaIcons = ({ socials }) => {
  const icons = {
    linkedIn: <FaLinkedin size={"2rem"} />,
    twitter: <FaTwitter size="2rem" />,
    instagram: <FaInstagram size="2rem" />,
  };
<<<<<<< HEAD
<<<<<<< HEAD

=======
  console.log("Socials", socials);
>>>>>>> 72238d6 (add social media icons for twitter and instagram)
=======

>>>>>>> e488744 (small fixes to imports and check for null people value)
  return (
    <div className={cx("social-media")}>
      {socials?.map(({ link, type }) => (
        <a href={link} key={link}>
          {icons[type]}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
