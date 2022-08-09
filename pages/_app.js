import "../styles/reset.scss";
import "../styles/globals.scss";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { FirebaseAppProvider } from "reactfire";

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
  );
}

export default MyApp;
