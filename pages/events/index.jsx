import groq from 'groq';
import client from '../../modules/sanity/client';
import classNames from 'classnames/bind';
import styles from "./events.module.scss";
import EventCard from '../../components/EventCard';
// import Link from 'next/link';

const cx = classNames.bind(styles);

export default function Events({ events }) {
 
  return (
    <section className={cx("events-container")}>
      <h1 className={cx("page-title")}>Events</h1>
     
      <div className={cx("event-cards-container")}>
      {events.map((event) => (
      
        <EventCard event={event} />
      
      ))}
     
      </div>
      
    </section>
  );
}

const eventsQuery = groq`*[_type == "event"] | order(year desc) {
                name,
                theme
            }`;

export async function getStaticProps() {
  const events = await client.fetch(eventsQuery);

  return { props: { events } };
}
