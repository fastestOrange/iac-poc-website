import groq from "groq";
import classNames from "classnames/bind";
import styles from "./speakers.module.scss";
import client from "../../../modules/sanity/client";
import SpeakerCard from "../../cards/components/SpeakerCard";

const cx = classNames.bind(styles);

export default function Speakers({ people }) {
  console.log("speakers", people);
  return (
    <section className={cx("speakers-container")}>
      <h1 className={cx("page-title")}>Presenters</h1>
      <div className={cx("speaker-cards-container")}>
        {people.map((person) => (
          <SpeakerCard
            key={person.firstName + person.lastName}
            person={person}
          />
        ))}
      </div>
    </section>
  );
}

const query = groq`*[_type == "person"] {
  firstName,
  lastName,
  professionalTitle,
  bio,
  linkedIn
}`;

export let speakers;

export async function getStaticProps() {
  speakers = await client.fetch(query);
  //TODO: match results to firebase query results in order to identify which people are speakers and filter them out.

  return {
    props: {
      speakers,
    },
  };
}
