import classNames from 'classnames/bind';
import styles from './welcomeBoxComponent.module.scss';

const cx = classNames.bind(styles);

const WelcomeBox = () => {
  return (
    <div className={cx('welcome-box-container')}>
      <div className={cx('text-container')}>
        <h1 className={cx('welcome-box-heading')}>Welcome to IAC22</h1>

        <h2 className={cx('welcome-box-subheading')}>[Re]Connect</h2>

        <p className={cx('welcome-box-text')}>
          Join us April 21st through 23rd as we [Re]Connect for three days of
          conversation, networking, and mentoring. IAC22 includes curated talks
          to help teams [Re]frame the problems in information architecture
          today. Most sessions will also be available on demand for later
          viewing.
        </p>
      </div>
      <br />
      <div className={cx('button-container')}>
        <button className={cx('submit-talk-button')}>Submit a Talk</button>

        <button className={cx('buy-ticket-button')}>Buy a Ticket</button>
      </div>
    </div>
  );
};

export default WelcomeBox;
