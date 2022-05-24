import { AuthWrappercontext } from "../context/auth";
import { Dashboardcontext } from "../context/dashboard";
import { Webcontext } from "../context/webContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Webcontext>
      <AuthWrappercontext>
        <Dashboardcontext>
          <Component {...pageProps} />
        </Dashboardcontext>
      </AuthWrappercontext>
    </Webcontext>
  );
}

export default MyApp;
