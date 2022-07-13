import groq from 'groq'
// import "../styles/Home.module.scss";
import client from '../../modules/sanity/client';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export default function People(props) {
  return (
    <DefaultLayout>
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
    </DefaultLayout>
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
