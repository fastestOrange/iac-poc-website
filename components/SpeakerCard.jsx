import classNames from "classnames/bind";
import speakerStyles from "./speakerComponents.module.scss";
import genericsStyles from "./../styles/generics.module.scss";
//import SocialMediaIcons from "./SocialMediaIcons";
import Link from "next/link";

const styles = { ...genericsStyles, ...speakerStyles };

const cx = classNames.bind(styles);

const SpeakerCard = ({ person }) => {
  const { firstName, lastName, professionalTitle, socials } = person;

  return (
    <div className={cx("card")} key={firstName}>
      {/*TODO: Replace with Image when available in data */}
      <Link href={`/speakers/${firstName}-${lastName}`}>
        <div className={cx("image-placeholder")} />
      </Link>

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
