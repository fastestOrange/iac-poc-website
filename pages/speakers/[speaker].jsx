import groq from "groq";
import classNames from "classnames/bind";
import styles from "./speakers.module.scss";
import client from "../../modules/sanity/client";

const cx = classNames.bind(styles);

export default function Speaker({ person }) {
  console.log("speaker", person);
  return <section className={cx("speaker-container")}>speaker</section>;
}

const query = groq`*[_type == "person"] {
  firstName,
  lastName,
  professionalTitle,
  bio
}`;

export async function getStaticPaths() {
  try {
    const people = await client.fetch(query);
    const paths = people.map((person) => ({
      params: { speaker: person.firstName + "-" + person.lastName },
    }));

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

export async function getStaticProps({ params }) {
  try {
    const person = params?.speaker;
    console.log("PERSON", person);
  } catch (e) {
    console.log("Error from get static props of speaker");
  }
  return {
    props: {
      person: {},
    },
  };
}
