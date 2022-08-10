import groq from "groq";
import client from "../../modules/sanity/client";
import classNames from "classnames/bind";
import styles from "../../pages/events/events.module.scss";

const cx = classNames.bind(styles);

export default function Events({ events }) {
  return (
    <section className="events-container">
      <h1>Event List</h1>
      <ul className={cx("event-cards-container")}>
        {events.map((event) => (
          <a href={`/events/${event.name.split(" ").join("-")}`}>
            <li>{event.name}</li>
          </a>
        ))}
      </ul>
    </section>
  );
}

const eventsQuery = groq`*[_type == "event"] {
    name,
    theme
}`;

export async function getStaticProps() {
  const events = await client.fetch(eventsQuery);

  return { props: { events } };
}
