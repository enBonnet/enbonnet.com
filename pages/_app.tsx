import "dayjs/locale/es-us";
import { AppProps } from "next/app";
import "normalize.css";
import "@/styles/base.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>{`
        html {
          background: var(--app-bg);
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition: all 1s;
        }
        .col {
          width: 1000px;
          max-width: 100%;
        }
        .container {
          margin: 0 16px;
        }
        .section-title {
          font-size: 24px;
        }
        .post a {
          color: inherit;
          text-decoration: underline;
          padding: 2px 4px;
        }
        .row {
          justify-content: center;
          display: grid;
          width: 100%;
        }
        .hidden-label {
          display: none;
        }
        .inline-code {
          background-color: var(--text-underline);
          color: var(--text-with-bg);
          padding: 2px 6px;
        }
        @media (max-width: 1000px) {
          .row {
            display: block;
          }
          .icon {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default MyApp;
