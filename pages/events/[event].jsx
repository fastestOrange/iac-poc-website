// import groq from 'groq';
// import client from "../../modules/sanity/client";

// export default function Event({ events }) {

//     return (
//         <section>
//             <h1>Event List</h1>
//         <ul>
//             {events?.length > 0 && events.map((event) => (
//             <li>
//                 <span>{event.name}</span>
//             </li>
//             ))}
//         </ul>
//         </section>
//     );
// }

// const eventsQuery = groq`*[_type == "event"] {
//     name,
//     theme
// }`;

// export async function getStaticProps() {
//     const events = await client.fetch(eventsQuery)

//     return { props: { events } };
// }

