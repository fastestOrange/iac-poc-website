// import groq from 'groq';
// import client from "../../modules/sanity/client";

// export default function Event({ events }) {
//     // const { name, theme} = event;

//     return (
//         <section>
//             <h1>Event List</h1>

//          {events.map((event) => (
//             <ul>
//             {event.name}
//             </ul>

//          ) )}
       
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
