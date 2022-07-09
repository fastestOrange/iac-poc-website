import Head from "next/head";
import groq from 'groq'
import "../styles/Home.module.scss";
import client from '../modules/sanity/client'

export default function Home(props) {
  console.log(props)
  return (
    <div className="container">
      <div className="box">
      People
      {props.people.map(person => (
        <div className="card m-4">
        <div className="card-content">
          <div className="content">
            <h2>{person.firstName} {person.lastName}</h2>
          </div>
        </div>
      </div>
      ))}
      Sessions
      {props.sessions.map(session => (
        <div className="card m-4">
        <div className="card-content">
          <div className="content">
          <>
          <h1>{session.sessionName}</h1>
          <div>Speakers: {session.speakers.firstName} {session.speakers.lastName}</div>
          <div>Moderated By: {session.moderators.firstName} {session.moderators.lastName}</div>
         </>
            
          </div>
        </div>
      </div>
      ))}
        </div>
    </div>
  );
}

const peopleQuery = groq`*[_type == "person"] {
  firstName,
  lastName
}`;

const sessionQuery = groq`*[_type == "session" && sessionName == "Borders between Bonanza"] {
  sessionName,
  speakers->,
  moderators->
}`
export async function getStaticProps() {
  const people = await client.fetch(peopleQuery);
  const sessions = await client.fetch(sessionQuery);

  return {
    props: {
      people,
      sessions
    },
  }
}
