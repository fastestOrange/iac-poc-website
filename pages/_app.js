import "../styles/reset.scss";
import "../styles/globals.scss";
<<<<<<< HEAD
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyCvapodXG0DHiW3SebX8MrOyDms5RcC1mM",
  authDomain: "ioc-poc-a3533.firebaseapp.com",
  projectId: "ioc-poc-a3533",
  storageBucket: "ioc-poc-a3533.appspot.com",
  messagingSenderId: "248607905999",
  appId: "1:248607905999:web:f7c340f4346552c9bb7fba"
};

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Component {...pageProps} />
    </FirebaseAppProvider>
=======
import { DefaultLayout } from "../layouts/DefaultLayout";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
>>>>>>> wip - created quick link for page testing.  moved default layout up a level to _app so it is available on all pages without needing to import defaultLayout in multiple files.
  );
}

export default MyApp;
