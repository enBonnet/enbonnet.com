import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="options">
          <div className="links">
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

      <style jsx>{`
        .navbar {
          position: absolute;
          width: 100%;
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
        .options .option:not(:last-child) {
          margin-right: 16px;
        }
      `}</style>
    </nav>
  );
}
