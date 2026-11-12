
import { Link } from 'react-router-dom';
import { expertise } from '../data/site';

export default function HeroInt({ title, lead, crumbs = [], slug }) {
  const currentExpertise = expertise.find(
    (e) => e.slug === slug
  );

  const backgroundImage = currentExpertise?.background || currentExpertise?.imgUrl;

  return (
    <section
      className="hero-int"
      style={{
        backgroundImage: backgroundImage
  ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`
  : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>

          {crumbs.map((c) => (
            <span key={c.label}>
              / {c.to ? (
                <Link to={c.to}>{c.label}</Link>
              ) : (
                c.label
              )}
            </span>
          ))}
        </nav>

        <h1>{title}</h1>

        {lead && (
          <p style={{
            maxWidth: '56ch',
            color: 'var(--c-text-inverse-muted)'
          }}>
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
