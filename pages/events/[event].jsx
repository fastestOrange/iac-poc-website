import groq from "groq";
import classNames from "classnames/bind";
import eventsStyles from "./events.module.scss";
import genericsStyles from "./../../styles/generics.module.scss";
import client from "../../modules/sanity/client";
import EventBanner from "../../components/EventBanner";
import SideNav from "../../components/SideNav";
import DividerWithLogo from "../../components/DividerWithLogo";
import SpeakerCard from "../../components/SpeakerCard";
import ButtonLg from "../../components/buttons/ButtonLg";
import MailingListForm from "../../components/forms/MailingListForm";
import {
  dummySpeakers,
  dummyKeyNotes,
  dummyUpdates,
} from "../../constants/dummyData";
import UpdateCard from "../../components/cards/UpdateCard";
import CTACard from "../../components/cards/CTACard";

const styles = { ...genericsStyles, ...eventsStyles };
const cx = classNames.bind(styles);

// TODO: Remove dummy data and hook up to live Sanity profiles
// TODO: Accessibility - research nested sections, best use of semantic html
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
              <div className={cx("key-notes")}>
                {dummyKeyNotes.map((person) => (
                  <SpeakerCard
                    key={person.firstName + person.lastName}
                    person={person}
                  />
                ))}
              </div>
              <div className={cx("other-speakers")}>
                {dummySpeakers.map((person) => (
                  <SpeakerCard
                    key={person.firstName + person.lastName}
                    person={person}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className={cx("info-section")}>
            <h3>Schedule Overview</h3>
            <div className={cx("schedule-buttons-container")}>
              <ButtonLg link="/" text="Workshops" />
              <ButtonLg link="/" text="Main Conference" />
            </div>
          </section>

          <section className={cx("info-section")}>
            <h3>Updates from the Team</h3>
            {dummyUpdates.map((update) => (
              <UpdateCard
                key={"update" + update.date}
                date={update.date}
                text={update.text}
              />
            ))}
          </section>

          <DividerWithLogo />

          <section className={cx("get-involved")}>
            <CTACard
              title={"Join as a Sponsor"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
              }
              link="/"
              ctaText="Learn about sponsorships"
            />

            <CTACard
              title={"Get Involved as a Volunteer"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
              }
              link="/"
              ctaText="Learn about volunteer opportunities"
            />
          </section>

          {/* Form */}
          <MailingListForm />
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
