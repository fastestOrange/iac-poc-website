import groq from "groq";
import classNames from "classnames/bind";
import eventsStyles from "./events.module.scss";
import genericsStyles from "./../../styles/generics.module.scss";
import client from "../../modules/sanity/client";
import EventBanner from "./../../components/EventBanner";
import SideNav from "../../components/SideNav";
import DividerWithLogo from "../../components/DividerWithLogo";
import SpeakerCard from "../../Components/SpeakerCard";
import { dummySpeakers } from "../../constants/dummyData";

const styles = { ...genericsStyles, ...eventsStyles };
const cx = classNames.bind(styles);

// TODO: Remove dummy data and hook up to live Sanity profiles
export default function Event({ event }) {
  const { name, theme, type, startDate, endDate, venue } = event;

  return (
    <section className={cx("event-container")}>
      <EventBanner event={event} />
      <div className={cx("body")}>
        <SideNav />
        <div className={cx("content")}>
          {/* Welcome CTA banner */}

          <section className={cx("info-section")}>
            <h3>Speakers</h3>
            <div className={cx("speakers-container")}>
              {dummySpeakers.map((person) => (
                <SpeakerCard
                  key={person.firstName + person.lastName}
                  person={person}
                />
              ))}
            </div>
          </section>

          <div>
            <h3>Schedule Overview</h3>
          </div>
          <div>
            <h3>Updates from the Team</h3>
          </div>

          <DividerWithLogo />

          {/*2 Preview Card */}

          {/* Form */}
        </div>
      </div>
    </section>
  );
}

const getEventsQuery = groq`*[_type == "event"] {
name,
theme,
type,
startDate,
endDate,
venue
  }`;

// Sets all the possible paths for our events
export async function getStaticPaths() {
  try {
    const events = await client.fetch(getEventsQuery);
    const paths = events.map((event) => ({
      params: { event: event.name.split(" ").join("-") },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.log("Error from get static paths of events");
    return {
      paths: [],
      fallback: false,
    };
  }
}

export const getEventQuery = (name) => {
  return groq`*[_type == "event" && name == "${name}"]{
    name,
    theme,
    type,
    startDate,
    endDate,
    venue
}`;
};

export async function getStaticProps({ params }) {
  try {
    const name = params?.event;
    const formattedName = name.split("-").join(" ");

    let event = await client.fetch(getEventQuery(formattedName));
    event = event[0];
    console.log("event", event);

    return {
      props: {
        event,
      },
    };
  } catch (e) {
    console.log("Error from get static props of speaker", e);
    return {
      props: {
        event: {},
      },
    };
  }
}
