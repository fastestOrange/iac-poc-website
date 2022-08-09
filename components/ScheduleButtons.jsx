import classNames from 'classnames/bind';
import styles from './scheduleButtonsComponent.module.scss';

const cx = classNames.bind(styles);

const ScheduleButtons = () => {
  return (
    <div>
      <h1 className={cx('schedule-buttons-heading')}>Schedule Overview</h1>

      <br />
      <div className={cx('button-container')}>
        <div>
          <button className={cx('workshops-button')}>Workshops</button>
          <button className={cx('main-conference-button')}>
            Main <br></br>Conference
          </button>
        </div>
      </div>


    </div>
  );
};

export default ScheduleButtons;
