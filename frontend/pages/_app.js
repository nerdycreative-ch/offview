import { AuthWrappercontext } from "../context/auth";
import { Dashboardcontext } from "../context/dashboard";
import { Webcontext } from "../context/webContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthWrappercontext>
      <Webcontext>
        <Dashboardcontext>
          <Component {...pageProps} />
        </Dashboardcontext>
      </Webcontext>
    </AuthWrappercontext>
  );
}

export default MyApp;
