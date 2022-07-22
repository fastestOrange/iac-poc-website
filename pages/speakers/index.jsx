import groq from "groq";
// import "../styles/Home.module.scss";
import client from "../../modules/sanity/client";
import SpeakerCard from "../../components/SpeakerCard";

export default function Speakers({ people }) {
  console.log("speakers", people);
  return (
    <section className="speaker-container is-justify-content-center">
      <h1 className="title is-1">Presenters</h1>
      {people.map((person) => (
        <SpeakerCard person={person} />
      ))}
    </section>
  );
}

const query = groq`*[_type == "person"] {
  firstName,
  lastName,
  professionalTitle,
  bio
}`;
export async function getStaticProps() {
  const people = await client.fetch(query);
  //TODO: match results to firebase query results in order to identify which people are speakers and filter them out.

  return {
    props: {
      people,
    },
  };
}
