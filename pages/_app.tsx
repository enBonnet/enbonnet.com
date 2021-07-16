import type { AppProps } from "next/app";
import "normalize.css";

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
          margin: 0 16px;
        }
      `}</style>
    </>
  );
}

export default MyApp;
