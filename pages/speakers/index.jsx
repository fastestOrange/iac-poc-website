import groq from "groq";
import classNames from "classnames/bind";
import styles from "./speakers.module.scss";
import client from "../../modules/sanity/client";
import SpeakerCard from "../../components/SpeakerCard";

const cx = classNames.bind(styles);

export default function Speakers({ people }) {
  console.log("speakers", people);
  return (
    <section className={cx("speakers-container")}>
      <h1 className={cx("page-title")}>Presenters</h1>
      <div className={cx("speaker-cards-container")}>
        {people.map((person) => (
<<<<<<< HEAD
          <SpeakerCard
            key={person.firstName + person.lastName}
            person={person}
          />
=======
          <SpeakerCard person={person} />
>>>>>>> dd8101c6ad33a790ceeb30ee497e0ae6a4a31d6c
        ))}
      </div>
    </section>
  );
}

const query = groq`*[_type == "person"] {
  firstName,
  lastName,
  professionalTitle,
<<<<<<< HEAD
  bio,
  linkedIn
}`;

=======
  bio
}`;
>>>>>>> dd8101c6ad33a790ceeb30ee497e0ae6a4a31d6c
export async function getStaticProps() {
  const people = await client.fetch(query);
  //TODO: match results to firebase query results in order to identify which people are speakers and filter them out.

  return {
    props: {
      people,
    },
  };
}
