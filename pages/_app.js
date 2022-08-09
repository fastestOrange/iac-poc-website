import "../styles/reset.scss";
import "../styles/globals.scss";
<<<<<<< HEAD
import { FirebaseAppProvider } from "reactfire";
import { DefaultLayout } from "../layouts/DefaultLayout";

const firebaseConfig = {
  apiKey: "AIzaSyCvapodXG0DHiW3SebX8MrOyDms5RcC1mM",
  authDomain: "ioc-poc-a3533.firebaseapp.com",
  projectId: "ioc-poc-a3533",
  storageBucket: "ioc-poc-a3533.appspot.com",
  messagingSenderId: "248607905999",
  appId: "1:248607905999:web:f7c340f4346552c9bb7fba",
};

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </FirebaseAppProvider>
=======
import { DefaultLayout } from "../layouts/DefaultLayout";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
>>>>>>> dd8101c6ad33a790ceeb30ee497e0ae6a4a31d6c
  );
}

export default MyApp;
