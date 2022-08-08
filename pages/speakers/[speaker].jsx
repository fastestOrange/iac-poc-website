import groq from "groq";
import classNames from "classnames/bind";
import speakersStyles from "./speakers.module.scss";
import genericsStyles from "./../../styles/generics.module.scss";
import client from "../../modules/sanity/client";
import SocialMediaIcons from "../../components/SocialMediaIcons";

const styles = { ...genericsStyles, ...speakersStyles };
const cx = classNames.bind(styles);

export default function Speaker({ person }) {
  const { firstName, lastName, professionalTitle, bio, roles, socials } =
    person;

  console.log("speaker in component", person.roles);
  return (
    <section className={cx("speaker-container")}>
      <div className={cx("image-placeholder")}></div>
      <h2 className={cx("speaker-name")}>
        {firstName} {lastName}
      </h2>
      <SocialMediaIcons socials={socials} />

      <h3>Roles</h3>
      {/* {roles.map((role) =>
        // <div key={role}>{role}</div>
        console.log("role", role, role.roleTitle)
      )} */}
      <h3>Bio</h3>
      <p>{bio}</p>
      <h3>Associated Sessions</h3>
    </section>
  );
}

let fName;
let lName;

const getPeopleQuery = groq`*[_type == "person"] {
  firstName,
  lastName
}`;

// Sets all the possible paths for our speakers
export async function getStaticPaths() {
  try {
    const people = await client.fetch(getPeopleQuery);
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

export const getSpeakerQuery = (fName, lName) => {
  return groq`*[_type == "person" && firstName == "${fName}" && lastName == "${lName}"]{
  firstName, 
  lastName, 
  professionalTitle, 
  bio,
  roles,
  linkedIn
}`;
};

// WIP: A role has a reference to a roleType and an event. This function extracts the actual data for those documents.
export const getRoleDataQuery = (role) => {
  const roleType = groq`*[_ref=="${role.roleTitle._ref}"]{
      r
    }`;
  const eventName = groq`*[_ref=="${role.event._ref}"]`;
  return { roleType, eventName };
};

export async function getStaticProps({ params }) {
  try {
    const name = params?.speaker;
    [fName, lName] = name.split("-");

    let person = await client.fetch(getSpeakerQuery(fName, lName));
    person = person[0];
    person.socials = [{ type: "linkedIn", link: person.linkedIn }];

    //TODO: Execute promises for every role to get data on roleType and eventName, add to person.role

    return {
      props: {
        person: person,
      },
    };
  } catch (e) {
    console.log("Error from get static props of speaker", e);
    return {
      props: {
        person: {},
      },
    };
  }
}
