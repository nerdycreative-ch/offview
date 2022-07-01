import Head from "next/head";
import { Advertisementcontext } from "../context/advertisement";
import { AuthWrappercontext } from "../context/auth";
import { Dashboardcontext } from "../context/dashboard";
import { Searchprofilecontext } from "../context/searchprofile";
import { Webcontext } from "../context/webContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />{" "}
      </Head>

      <AuthWrappercontext>
        <Dashboardcontext>
          <Advertisementcontext>
            <Searchprofilecontext>
              <Webcontext>
                <Component {...pageProps} />
              </Webcontext>
            </Searchprofilecontext>
          </Advertisementcontext>
        </Dashboardcontext>
      </AuthWrappercontext>
    </>
  );
}

export default MyApp;
