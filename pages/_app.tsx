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
          background: #f2f2f2;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .container {
          grid-area: container;
          margin: 0 16px;
          max-width: 1000px;
        }
        .section-title {
          font-size: 24px;
        }
        .row {
          display: grid;
          grid-template-columns: 10% auto 10%;
          grid-template-areas: ". container .";
        }
        @media (max-width: 1000px) {
          .row {
            display: block;
          }
        }
      `}</style>
    </>
  );
}

export default MyApp;
