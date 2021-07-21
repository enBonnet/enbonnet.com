import Link from "next/link";
import { Github, Twitter, Linkedin } from "./icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="content">
        <div className="highlight">
          <h1 className="title">Ender Bonnet</h1>
        </div>
        <div className="description">
          <p>Frontend Developer, apasionado por compartir conocimientos.</p>
        </div>
        <div className="rrss">
          <div className="twitter">
            <a
              className="social"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/enbonnet"
            >
              <Twitter />
            </a>
          </div>
          <div className="github">
            <a
              className="social"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/enbonnet"
            >
              <Github />
            </a>
          </div>
          <div className="linkedin">
            <a
              className="social"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/enbonnet/"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .hero .highlight {
          background-color: #000;
          padding: 8px 16px;
          width: fit-content;
        }
        .hero .title {
          font-size: 2.7em;
          margin: 0;
          background: linear-gradient(90deg, #1cfeba, #9d8df1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero .description {
          max-width: 300px;
          line-height: 30px;
          font-size: 1.3em;
          font-weight: 200;
        }
        .rrss {
          display: flex;
        }
        .rrss .social {
          color: inherit;
          margin-right: 16px;
        }
      `}</style>
    </section>
  );
}
