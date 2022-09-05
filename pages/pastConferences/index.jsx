import groq from 'groq';
import client from '../../modules/sanity/client';
import classNames from 'classnames/bind';
import pastConferenceStyles from "./pastConferences.module.scss";
import EventCard from '../../components/cards/pastConferencesCard';
import genericStyles from "./../../styles/generics.module.scss";

const styles = { ...genericStyles, ...pastConferenceStyles };
const cx = classNames.bind(styles);

export default function Events({ events }) {
 
  return (
    <section className={cx("pastConferences-container")}>
      <h1 className={cx("page-title")}>Past Conferences</h1>
     
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

  return { props: { events } }};