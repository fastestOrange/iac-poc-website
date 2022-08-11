import classNames from "classnames/bind";
import styles from "./../pages/events/events.module.scss";

const cx = classNames.bind(styles);

const EventBanner = () => {
  return (
    <section className={cx("event-banner")}>
      <h1>
        IAC22 Online
        <br />
<<<<<<< HEAD
        <hr />
=======
>>>>>>> 647dc0c (WIP - event page layout has side nav, unstyled event banner, speakers, and divider.  default layout has main navigation and hover links - need to fix shifting on hover.)
        [Re]Connect
      </h1>
      <div className={cx("event-date")}>April 18th-23rd, 2022</div>
    </section>
  );
};

export default EventBanner;
