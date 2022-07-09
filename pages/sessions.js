import Head from "next/head";
import groq from 'groq'
import "../styles/Home.module.scss";
import client from '../modules/sanity/client'

export default function Sessions(props) {
  return (
    <div className="container">
      <div className="box">
       {props.sessions.map(session => (
         <>
          <h1>{session.sessionName}</h1>
          <div>Speakers: {session.speakers.firstName} {session.speakers.lastName}</div>
          <div>Moderated By: {session.moderators.firstName} {session.moderators.lastName}</div>
         </>
       ))}
       <pre>{JSON.stringify(props.sessions, null, 2)}</pre>
      </div>
    </div>
  );
}

const query = groq`*[_type == "session" && sessionName == "Borders between Bonanza"] {
  sessionName,
  speakers->,
  moderators->
}`
export async function getStaticProps() {
  const sessions = await client.fetch(query);
  return {
    props: {
      sessions
    },
  }
}
