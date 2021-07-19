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
          background-color: rgba(255, 255, 255, 30%);
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
