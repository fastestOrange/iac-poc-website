import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./eventComponents.module.scss";

const cx = classNames.bind(styles);

const EventCard = ({ event }) => {
  const { name, theme, year } = event;

  return (
    <div className={cx("card")}>
      {/*TODO: Replace with Image when available in data */}
      <a href={`events/${year}`}>
        <div className={cx("image-placeholder")} />
      </a>
      <div className={cx("event-info")}>
        <p className={cx("name")}>
          {name} {theme} {year}
        </p>

      </div>
    </div>
  );
};

export default EventCard;