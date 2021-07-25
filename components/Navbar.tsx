import Link from "next/link";
import Search from "./Search";

interface NavbarProps {
  absolute?: boolean;
}

export default function Navbar({ absolute }: NavbarProps) {
  return (
    <nav className={`row navbar ${absolute ? "absolute" : ""}`}>
      <div className="col">
        <div className="container">
          <div className="options">
            <div className="links">
              <div role="img" className="icon ">
                🪴
              </div>
              <Link href="/">
                <a className="option">Inicio</a>
              </Link>
              <Link href="/blog/page/1">
                <a className="option">Blog</a>
              </Link>
            </div>
            <Search />
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          width: 100%;
        }
        .icon {
          font-size: 30px;
        }
        .navbar.absolute {
          position: absolute;
        }
        .options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
        }
        .options .option {
          text-decoration: none;
          color: inherit;
          font-weight: bold;
          font-size: 18px;
        }
        .links {
          display: flex;
          gap: 24px;
          align-items: center;
        }
        @media (max-width: 1000px) {
          .links {
            gap: 10px;
          }
        }
      `}</style>
    </nav>
  );
}
