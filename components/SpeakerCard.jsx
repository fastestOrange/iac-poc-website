import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./speakerComponents.module.scss";

const cx = classNames.bind(styles);

const SpeakerCard = ({ person }) => {
  console.log("person", person);
  const { firstName, lastName, professionalTitle, bio } = person;

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
      </div>
    </div>
  );
};

export default SpeakerCard;
