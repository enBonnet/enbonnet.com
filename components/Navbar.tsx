import { useEffect, useState } from "react";
import Link from "next/link";
import Search from "./Search";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";

interface NavbarProps {
  absolute?: boolean;
}

export default function Navbar({ absolute }: NavbarProps) {
  const [theme, setTheme] = useState("");

  function switchTheme() {
    if (typeof window !== undefined) {
      const theme = document.documentElement.getAttribute("data-theme");
      if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        setTheme("light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        setTheme("dark");
      }
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      const currentTheme = localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : null;
      document.documentElement.setAttribute(
        "data-theme",
        currentTheme || "light"
      );
      setTheme(currentTheme || "light");
    }
  }, [setTheme]);

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
            <div className="right">
              <button className="toggle-theme" onClick={switchTheme}>
                <div className="hidden-label">Elegir tema</div>
                {theme === "light" ? (
                  <div>
                    <div className="hidden-label">Tema oscuro</div>
                    <Moon />
                  </div>
                ) : (
                  <div>
                    <div className="hidden-label">Tema claro</div>
                    <Sun />
                  </div>
                )}
              </button>
              <Search />
            </div>
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
          color: var(--text-color);
        }
        .links {
          display: flex;
          gap: 24px;
          align-items: center;
        }
        .right {
          display: flex;
          gap: 24px;
        }
        .toggle-theme {
          color: var(--text-color);
          background: none;
          border: none;
          outline: none;
        }
        @media (max-width: 1000px) {
          .links,
          .right {
            gap: 10px;
          }
        }
      `}</style>
    </nav>
  );
}
