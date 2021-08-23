import "style/style.css";
import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";

import NProgress from "nprogress";
import Router from "next/router";
import { ToastContainer } from "react-toastify";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position="top-center" />
    </>
  );
}

export default MyApp;
