import classNames from "classnames/bind";
import styles from "./cards.module.scss";
import CTAButton from "../buttons/CTAButton";
import Link from "next/link";

const cx = classNames.bind(styles);

const EventWelcomeCard = ({ event }) => {
  //TODO: replace with dynamic props
  return (
    <div className={cx("event-card")}>
      <p className={cx("title")}>Welcome to IAC22</p>
      <p className={cx("description")}>
        Some type of specific introduction and explanation on what the following
        events are for. Example; Here you will find events on blank, they are
        intended to do blank. something about social connections.
      </p>
      <div className={cx("buttons-container")}>
        <CTAButton text="Submit a Talk" link="/" type="secondary" />
        <CTAButton text="Buy a Ticket" link="/" />
      </div>
    </div>
  );
};

export default EventWelcomeCard;
