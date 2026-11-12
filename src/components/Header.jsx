
import { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { expertise, industries } from '../data/site';
import logo from '../assets/logo.jpg';

function Dropdown({ label, items, base }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="dropdown" ref={ref}>
      <button
        type="button"
        className="dropdown__trigger"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
      >
        {label}
        <i className="bx bx-chevron-down" aria-hidden="true" />
      </button>

      {open && (
        <div className="dropdown__menu" role="menu">
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`${base}/${item.slug}`}
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [drawer]);

  useEffect(() => {
    if (!drawer) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDrawer(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawer]);

  const closeDrawer = () => setDrawer(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header__inner">
        <Link
          to="/"
          className="logo"
          aria-label="EnableMining home"
        >
          <img src={logo} height="40" alt="EnableMining" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav" aria-label="Primary navigation">
          <NavLink to="/">Home</NavLink>

          <Dropdown
            label="Expertise"
            items={expertise}
            base="/expertise"
          />

          <Dropdown
            label="Industries"
            items={industries}
            base="/industries"
          />

          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/careers">Careers</NavLink>

          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="hamburger"
          aria-label="Open navigation menu"
          aria-expanded={drawer}
          aria-controls="mobile-navigation"
          onClick={() => setDrawer(true)}
        >
          <i className="bx bx-menu" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {drawer && (
        <div
          className="drawer"
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="drawer__head">
            <Link
              to="/"
              className="logo"
              aria-label="EnableMining home"
              onClick={closeDrawer}
            >
              <img src={logo} height="40" alt="EnableMining" />
            </Link>

            <button
              type="button"
              className="hamburger"
              aria-label="Close navigation menu"
              onClick={closeDrawer}
            >
              <i className="bx bx-x" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile navigation links">
            <Link to="/" onClick={closeDrawer}>
              Home
            </Link>

            <details>
              <summary>Expertise</summary>

              <div className="drawer__submenu">
                {expertise.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/expertise/${item.slug}`}
                    onClick={closeDrawer}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </details>

            <details>
              <summary>Industries</summary>

              <div className="drawer__submenu">
                {industries.map((item) => (
                  <Link
                    key={item.slug}
                    to="/industries"
                    onClick={closeDrawer}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </details>

            <Link to="/about" onClick={closeDrawer}>
              About Us
            </Link>

            <Link to="/careers" onClick={closeDrawer}>
              Careers
            </Link>
          </nav>

          <Link
            to="/contact"
            className="btn btn-primary"
            onClick={closeDrawer}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
