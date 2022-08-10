import classNames from "classnames/bind";
import styles from "./forms.module.scss";
import CTAButton from "../../components/buttons/CTAButton";

const cx = classNames.bind(styles);

const MailingListForm = () => {
  // TODO: form validation
  return (
    <form className={cx("mailing-list-form")}>
      <p className={cx("title")}>Build the Community</p>
      <p>Join the IAC Mailing List today!</p>
      <div className={cx("top-row")}>
        <div className={cx("data-input")}>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" />
        </div>
        <div className={cx("data-input")}>
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" />
        </div>
      </div>
      <div className={cx("data-input")}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <CTAButton text="Subscribe" link="/" type="primary" />
    </form>
  );
};

export default MailingListForm;
