import classNames from "classnames/bind";
import styles from "./cards.module.scss";

const cx = classNames.bind(styles);

const EventCard = ({ event }) => {
  const { name, theme, year } = event;

  return (
    <div className={cx("event-card")}>
 
      <a href={`pastConferences/${year}`}>
        <p className={cx("description")}>
          {name} {year}
          <br/>
          <br/>
          {theme}
        </p>
        </a>

      </div>
    
  );
};

export default EventCard;