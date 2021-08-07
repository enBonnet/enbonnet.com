import Highlight from "./Highlight";
import { Github, Twitter, Linkedin } from "./icons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="content">
        <Highlight title="Ender Bonnet" />
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
              aria-label="Twitter"
            >
              <div aria-hidden="true" className="hidden-label">
                Twitter
              </div>
              <Twitter />
            </a>
          </div>
          <div className="github">
            <a
              className="social"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/enbonnet"
              aria-label="Github"
            >
              <div aria-hidden="true" className="hidden-label">
                Github
              </div>
              <Github />
            </a>
          </div>
          <div className="linkedin">
            <a
              className="social"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/enbonnet/"
              aria-label="Linkedin"
            >
              <div aria-hidden="true" className="hidden-label">
                Linkedin
              </div>
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
        .hero .description {
          max-width: 300px;
          line-height: 30px;
          font-size: 1.3em;
          font-weight: 200;
          color: var(--text-color);
        }
        .rrss {
          display: flex;
        }
        .rrss .social {
          color: var(--text-color);
          margin-right: 16px;
        }
      `}</style>
    </section>
  );
}
