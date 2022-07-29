import "../styles/Home.module.scss";
import { DefaultLayout } from "../layouts/DefaultLayout";

export default function Home(props, {events}) {
  return (
    <DefaultLayout>
      <div className="p-6">
        MAIN CONTENT WINDOW
      </div>
    </DefaultLayout>
  );
}
