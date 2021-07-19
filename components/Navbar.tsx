import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="options">
          <Link href="/">
            <a className="logo">Inicio</a>
          </Link>
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
        .options .logo {
          text-decoration: none;
          color: inherit;
          font-weight: bold;
          font-size: 18px;
        }
      `}</style>
    </nav>
  );
}
