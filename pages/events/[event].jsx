// const Details = () => {
//     return (
//         <div>
//             <h1>Details Page</h1>
//         </div>
//     ); 
// }

// export default Details; 

import groq from "groq";
import classNames from "classnames/bind";
import styles from "./events.module.scss";
import client from "../../modules/sanity/client";

const cx = classNames.bind(styles);

export default function Event({ event }) {
  const { name, theme, year } = person;
//   console.log("speaker in component", person);
  return (
    <section className={cx("event-container")}>
      <div className={cx("image-placeholder")}></div>
      <p>
        {name} {theme}
      </p>
    </section>
  );
}


const query = groq`*[_type == "event"] {
  name,
  title,
  year
}`;

// Sets all the possible paths for events
export async function getStaticPaths() {
  try {
    const event = await client.fetch(query);
    // console.log("PEOPLE", people);
    const paths = event.map((event) => ({
      params: { event: event.year},
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
// https://www.sanity.io/docs/query-cheat-sheet

// const specificSpeakerQuery = groq`*[_type == "person" && firstName == "Alberta"]{
//   firstName, 
//   lastName, 
//   professionalTitle, 
//   bio
// }`;

// export async function getStaticProps({ params }) {
//   try {
//     const name = params?.speaker;
//     [fName, lName] = name.split("-");
//     console.log("NAME", fName, lName);

//     const person = await client.fetch(specificSpeakerQuery);
//     console.log("person in props", person);
//     return {
//       props: {
//         person: person,
//       },
//     };
//   } catch (e) {
//     console.log("Error from get static props of speaker");
//     return {
//       props: {
//         person: {},
//       },
//     };
//   }
// }