import classNames from "classnames/bind";
import styles from "./speakerComponents.module.scss";
import SocialMediaIcons from "./SocialMediaIcons";

const cx = classNames.bind(styles);

const SpeakerCard = ({ person }) => {
  const { firstName, lastName, professionalTitle, socials } = person;

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
        <SocialMediaIcons socials={socials} />
      </div>
    </div>
  );
};

export default SpeakerCard;
