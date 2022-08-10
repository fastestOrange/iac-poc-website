import classNames from "classnames/bind";
import genericsStyles from "./cards.module.scss";

const styles = { ...genericsStyles };

const cx = classNames.bind(styles);

const UpdateCard = ({ date, text, color }) => {
  return (
    <div className={cx("update-card")}>
      <div className={cx("update-date")}>{date}</div>
      <div className={cx("update-text")}>{text}</div>
    </div>
  );
};

export default UpdateCard;
