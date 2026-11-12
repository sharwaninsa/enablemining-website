
import { Link } from 'react-router-dom';
import { expertise, industries } from '../data/site';
import logo from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__grid">

          <div>
            <div className="logo">
              <img src={logo} height="40" alt="EnableMining" />
            </div>

            <p
              style={{
                color: 'var(--c-text-inverse-muted)',
                fontSize: '.9rem',
                marginTop: 'var(--s-3)'
              }}
            >
              Mining strategy. Mine planning. Operational performance.
            </p>

            <p
              style={{
                color: 'var(--c-text-inverse-muted)',
                fontSize: '.9rem'
              }}
            >
              <a href="mailto:nitin.bordia@enablemining.com">
                nitin.bordia@enablemining.com
              </a>
              <br />

              <a href="tel:+61412895564">
                +61 412 895 564
              </a>
            </p>
          </div>

          <div>
            <h4>Expertise</h4>

            <ul>
              {expertise.map((e) => (
                <li key={e.slug}>
                  <Link to={`/expertise/${e.slug}`}>
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Industries</h4>

            <ul>
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link to={`/industries/${i.slug}`}>
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>

            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/careers">Careers</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <a
              href="https://www.linkedin.com/company/enable-mining"
              aria-label="EnableMining on LinkedIn"
              style={{
                display: 'inline-block',
                marginTop: 'var(--s-4)',
                fontSize: '1.5rem',
                color: '#fff'
              }}
            >
              <i className="bx bxl-linkedin" aria-hidden="true" />
            </a>
          </div>

        </div>

        <div className="footer__bottom">

          <span>
            © {new Date().getFullYear()} EnableMining Pty Ltd.
            All rights reserved.
          </span>

          <span>
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
          </span>

        </div>

      </div>
    </footer>
  );
}
