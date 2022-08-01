import "../styles/reset.scss";
import "../styles/globals.scss";
import { DefaultLayout } from "../layouts/DefaultLayout";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
