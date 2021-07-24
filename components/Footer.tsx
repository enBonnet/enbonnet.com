import rrss from "@/data/rrss";

export default function Footer() {
  return (
    <footer className="row footer">
      <div className="col">
        <div className="container">
          <ul className="links">
            {rrss.map((social) => (
              <li className="item" key={social.name}>
                <a
                  className="link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={social.url}
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: var(--text-bg);
        }
        .links {
          align-items: center;
          display: flex;
          height: 100px;
          justify-content: space-around;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .links .link {
          color: var(--text-with-bg);
          text-decoration: none;
          font-size: var(--actions-text-size);
        }
      `}</style>
    </footer>
  );
}
