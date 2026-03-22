import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logoIcon from "../assets/Logo_AgroViva1.PNG";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <header className="topbar">
        <nav
          className={`navbar-custom 
            ${scrolled ? "navbar-scrolled" : ""}
            ${!isHome ? "navbar-solid" : ""}
          `}
        >
          <div className="container nav-wrapper">
            {/* Desktop */}
            <div className="nav-desktop">
              <div className="nav-left">
                <Link className="nav-link" to="/">
                  Home
                </Link>

                <Link className="nav-link" to="/impacto">
                  Impacto Social
                </Link>
              </div>

              <div className="nav-center">
                <Link className="navbar-brand-custom" to="/">
                  <img
                    src={logoIcon}
                    alt="Logo AgroViva Web"
                    className="brand__logo"
                  />
                  <span className={`brand__text ${scrolled ? "show-text" : "hide-text"}`}>
  AgroViva Web
</span>
                </Link>
              </div>

              <div className="nav-right">
                <Link className="nav-link" to="/beneficios">
                  Benefícios
                </Link>

                <Link className="nav-link" to="/chatbot">
                  Chatbot
                </Link>

                <Link className="nav-link nav-contact" to="/fale">
                  Fale Conosco
                </Link>
              </div>
            </div>

            {/* Mobile */}
            <div className="nav-mobile" ref={mobileMenuRef}>
              <div className="nav-mobile-top">
                <Link className="navbar-brand-custom" to="/" onClick={closeMenu}>
                  <img
                    src={logoIcon}
                    alt="Logo AgroViva Web"
                    className="brand__logo"
                  />
                  <span className={`brand__text ${scrolled ? "show-text" : "hide-text"}`}>
  AgroViva Web
</span>
                </Link>

                <button
                  className={`custom-toggler ${menuOpen ? "open" : ""}`}
                  type="button"
                  onClick={toggleMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>

              <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
                <div className="mobile-links">
                  <Link className="nav-link" to="/" onClick={closeMenu}>
                    Home
                  </Link>

                  <Link className="nav-link" to="/impacto" onClick={closeMenu}>
                    Impacto Social
                  </Link>

                  <Link className="nav-link" to="/beneficios" onClick={closeMenu}>
                    Benefícios
                  </Link>

                  <Link className="nav-link" to="/chatbot" onClick={closeMenu}>
                    Chatbot
                  </Link>

                  <Link
                    className="nav-link nav-contact"
                    to="/fale"
                    onClick={closeMenu}
                  >
                    Fale Conosco
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Espaçador só nas páginas internas */}
      {!isHome && <div className="navbar-spacer"></div>}
    </>
  );
}

export default Navbar;