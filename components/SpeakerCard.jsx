import classNames from "classnames/bind";
import speakerStyles from "./speakerComponents.module.scss";
import genericsStyles from "./../styles/generics.module.scss";
import SocialMediaIcons from "./SocialMediaIcons";

const styles = { ...genericsStyles, ...speakerStyles };

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
        {/* TODO: <SocialMediaIcons socials={socials} /> needs to access an array of social media at the index.jsx level*/}
      </div>
    </div>
  );
};

export default SpeakerCard;
