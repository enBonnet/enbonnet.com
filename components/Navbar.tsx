import Link from "next/link";
import Search from "./Search";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";
import { useTheme } from "next-themes";

interface NavbarProps {
  absolute?: boolean;
}

function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();
  const darkTheme = "dark";
  const lightTheme = "light";

  const switchTheme = () => {
    if (theme === darkTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  return (
    <button
      aria-label="Cambiar color del tema"
      className="toggle-theme"
      onClick={switchTheme}
    >
      <div aria-hidden="true" className="hidden-label">
        Elegir tema
      </div>
      {theme === "dark" ? (
        <div>
          <div aria-hidden="true" className="hidden-label">
            Tema claro
          </div>
          <Sun />
        </div>
      ) : (
        <div>
          <div aria-hidden="true" className="hidden-label">
            Tema oscuro
          </div>
          <Moon />
        </div>
      )}
      <style jsx>{`
        .toggle-theme {
          color: var(--text-color);
          background: none;
          border: none;
          outline: none;
        }
      `}</style>
    </button>
  );
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
            <div className="right">
              <ToggleDarkMode />
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
