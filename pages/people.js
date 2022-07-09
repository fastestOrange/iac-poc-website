import Head from "next/head";
import groq from 'groq'
import "../styles/Home.module.scss";
import client from '../modules/sanity/client'

export default function People(props) {
  return (
    <div className="container">
      <div className="box">
      {props.people.map(person => (
        <div className="card m-4">
        <div className="card-content">
          <div className="content">
            <h2>{person.firstName} {person.lastName}</h2>
          </div>
        </div>
      </div>
      ))}
        </div>
    </div>
  );
}

const query = groq`*[_type == "person"] {
  firstName,
  lastName
}`
export async function getStaticProps() {
  const people = await client.fetch(query);

  return {
    props: {
      people
    },
  }
}
