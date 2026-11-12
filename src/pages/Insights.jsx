import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroInt from '../components/HeroInt';
import CTABand from '../components/CTABand';
import { insights } from '../data/site';

const categories = ['All','Mining Strategy','Mine Planning','Operational Excellence','Digital Mining','Technical Evaluations'];

export default function Insights() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const filtered = useMemo(() => insights.filter((a) =>
    (cat === 'All' || a.category === cat) &&
    a.title.toLowerCase().includes(q.toLowerCase())
  ), [q, cat]);

  return (
    <>
      <HeroInt title="Insights" lead="Practical perspectives on mining strategy, planning, and operations." crumbs={[{ label:'Insights' }]} />
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Insight filters">
            <input type="search" placeholder="Search insights" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search insights" />
            <select aria-label="Filter by category" value={cat} onChange={(e) => setCat(e.target.value)}>
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <p aria-live="polite" style={{ color:'var(--c-text-secondary)' }}>
            {filtered.length} insight{filtered.length !== 1 && 's'} found
          </p>
          <div className="insights-grid">
            {filtered.map((a) => (
              <article key={a.slug} className="insight">
                <img src={`https://source.unsplash.com/800x533/?mining,${a.slug}`} alt="" aria-hidden="true" />
                <span className="tag">{a.category}</span>
                <h3><Link to={`/insights/${a.slug}`}>{a.title}</Link></h3>
                <span className="meta">{new Date(a.date).toLocaleDateString()} · {a.read} read</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}