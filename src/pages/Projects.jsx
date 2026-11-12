import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroInt from '../components/HeroInt';
import CTABand from '../components/CTABand';
import { projects } from '../data/site';

export default function Projects() {
  const [commodity, setCommodity] = useState('All');
  const [expertiseFilter, setExpertiseFilter] = useState('All');
  const filtered = useMemo(() => projects.filter((p) =>
    (commodity === 'All' || p.commodity === commodity) &&
    (expertiseFilter === 'All' || p.expertise === expertiseFilter)
  ), [commodity, expertiseFilter]);

  return (
    <>
      <HeroInt title="Projects" lead="Selected consulting work across the mining lifecycle." crumbs={[{ label:'Projects' }]} />
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Project filters">
            <select aria-label="Filter by commodity" value={commodity} onChange={(e) => setCommodity(e.target.value)}>
              {['All','Coal','Metalliferous'].map((c) => <option key={c}>{c}</option>)}
            </select>
            <select aria-label="Filter by expertise" value={expertiseFilter} onChange={(e) => setExpertiseFilter(e.target.value)}>
              {['All','Mine Planning & Scheduling','Operational Improvement','Due Diligence'].map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <p aria-live="polite" style={{ color:'var(--c-text-secondary)' }}>
            {filtered.length} project{filtered.length !== 1 && 's'} shown
          </p>
          <div className="cards-grid">
            {filtered.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="img-card">
                <img src={`https://source.unsplash.com/800x533/?mining,${p.slug}`} alt="" aria-hidden="true" />
                <div>
                  <span className="tag" style={{ fontSize:'.75rem', letterSpacing:'.14em', textTransform:'uppercase' }}>{p.commodity}</span>
                  <h3>{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}