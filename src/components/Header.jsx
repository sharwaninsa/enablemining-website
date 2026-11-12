
import { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { expertise, industries } from '../data/site';
import logo from '../assets/logo.jpg';

function Dropdown({ label, items, base }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className="dropdown" ref={ref}>
      <button
        className="dropdown__trigger"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label} <i className="bx bx-chevron-down" aria-hidden="true" />
      </button>

      {open && (
        <div className="dropdown__menu" role="menu">
          {items.map((it) => (
            <Link
              key={it.slug}
              to={`${base}/${it.slug}`}
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {it.title}
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
    const onScroll = () => setScrolled(window.scrollY > 8);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [drawer]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header__inner">

        <Link to="/" className="logo" aria-label="EnableMining home">
          <img height="40" src={logo} alt="EnableMining" />
        </Link>

        <nav className="nav" aria-label="Primary">
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

        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setDrawer(true)}
        >
          <i className="bx bx-menu" aria-hidden="true" />
        </button>

      </div>

      {drawer && (
        <div
          className="drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="drawer__head">
            <span className="logo">
              Enable<span>Mining</span>
            </span>

            <button
              className="hamburger"
              aria-label="Close menu"
              onClick={() => setDrawer(false)}
            >
              <i className="bx bx-x" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile">

            <details>
              <summary>Expertise</summary>

              {expertise.map((e) => (
                <Link
                  key={e.slug}
                  to={`/expertise/${e.slug}`}
                  onClick={() => setDrawer(false)}
                >
                  {e.title}
                </Link>
              ))}
            </details>

            <details>
              <summary>Industries</summary>

              {industries.map((i) => (
                <Link
                  key={i.slug}
                  to={`/industries/${i.slug}`}
                  onClick={() => setDrawer(false)}
                >
                  {i.title}
                </Link>
              ))}
            </details>

            <Link to="/about" onClick={() => setDrawer(false)}>
              About Us
            </Link>

            <Link to="/careers" onClick={() => setDrawer(false)}>
              Careers
            </Link>

          </nav>

          <Link
            to="/contact"
            className="btn btn-primary"
            onClick={() => setDrawer(false)}
          >
            Contact Us
          </Link>

        </div>
      )}
    </header>
  );
}
