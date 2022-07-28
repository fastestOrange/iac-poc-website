import groq from "groq";
import classNames from "classnames/bind";
import styles from "./speakers.module.scss";
import client from "../../modules/sanity/client";

const cx = classNames.bind(styles);

export default function Speaker({ person }) {
  const { firstName, lastName, professionalTitle, bio } = person;
  console.log("speaker in component", person);
  return (
    <section className={cx("speaker-container")}>
      <div className={cx("image-placeholder")}></div>
      <p className={cx("speaker-name")}>
        {firstName} {lastName}{" "}
      </p>
    </section>
  );
}

let fName;
let lName;

const query = groq`*[_type == "person"] {
  firstName,
  lastName
}`;

// Sets all the possible paths for our speakers
export async function getStaticPaths() {
  try {
    const people = await client.fetch(query);
    console.log("PEOPLE", people);
    const paths = people.map((person) => ({
      params: { speaker: person.firstName + "-" + person.lastName },
    }));

    console.log("Paths", paths);

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.log("Error from get static paths of speaker");
    return {
      paths: [],
      fallback: false,
    };
  }
}

// TODO: get query working with variable firstName and lastName
// https://www.sanity.io/docs/query-cheat-sheet

const specificSpeakerQuery = groq`*[_type == "person" && firstName == "Alberta"]{
  firstName, 
  lastName, 
  professionalTitle, 
  bio
}`;

export async function getStaticProps({ params }) {
  try {
    const name = params?.speaker;
    [fName, lName] = name.split("-");
    console.log("NAME", fName, lName);

    const person = await client.fetch(specificSpeakerQuery);
    console.log("person in props", person);
    return {
      props: {
        person: person,
      },
    };
  } catch (e) {
    console.log("Error from get static props of speaker");
    return {
      props: {
        person: {},
      },
    };
  }
}
