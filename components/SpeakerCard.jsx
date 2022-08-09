import classNames from "classnames/bind";
<<<<<<< HEAD
import speakerStyles from "./speakerComponents.module.scss";
import genericsStyles from "./../styles/generics.module.scss";
import SocialMediaIcons from "./SocialMediaIcons";

const styles = { ...genericsStyles, ...speakerStyles };
=======
import Image from "next/image";
import styles from "./speakerComponents.module.scss";
>>>>>>> dd8101c6ad33a790ceeb30ee497e0ae6a4a31d6c

const cx = classNames.bind(styles);

const SpeakerCard = ({ person }) => {
<<<<<<< HEAD
  const { firstName, lastName, professionalTitle, socials } = person;
=======
  const { firstName, lastName, professionalTitle } = person;
>>>>>>> dd8101c6ad33a790ceeb30ee497e0ae6a4a31d6c

  return (
    <div className={cx("card")}>
      {/*TODO: Replace with Image when available in data */}
      <a href={`speakers/${firstName}-${lastName}`}>
        <div className={cx("image-placeholder")} />
      </a>

      <div className={cx("speaker-info")}>
        <p className={cx("name")}>
          {firstName} {lastName}
        </p>

        <p className={cx("professional-title")}>{professionalTitle}</p>

        <div className={cx("social-media")}></div>
<<<<<<< HEAD
        {/* TODO: <SocialMediaIcons socials={socials} /> needs to access an array of social media at the index.jsx level*/}
=======
>>>>>>> dd8101c6ad33a790ceeb30ee497e0ae6a4a31d6c
      </div>
    </div>
  );
};

export default SpeakerCard;
