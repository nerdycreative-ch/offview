import Head from "next/head";
import { AuthWrappercontext } from "../context/auth";
import { Dashboardcontext } from "../context/dashboard";
import { Webcontext } from "../context/webContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Webcontext>
      <AuthWrappercontext>
        <Dashboardcontext>
          <>
            <Head>
              <link rel="icon" href="/assets/images/web/greenLogo.svg"></link>
            </Head>
            <Component {...pageProps} />
          </>
        </Dashboardcontext>
      </AuthWrappercontext>
    </Webcontext>
  );
}

export default MyApp;
