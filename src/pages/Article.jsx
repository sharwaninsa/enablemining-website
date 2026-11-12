import { useParams, Link } from 'react-router-dom';
import HeroInt from '../components/HeroInt';
import CTABand from '../components/CTABand';
import { insights } from '../data/site';

export default function Article() {
  const { slug } = useParams();
  const a = insights.find((x) => x.slug === slug);
  if (!a) return <HeroInt title="Article not found" crumbs={[{ label:'Insights', to:'/insights' }]} />;
  const related = insights.filter((x) => x.slug !== slug).slice(0, 2);
  return (
    <>
      <HeroInt title={a.title} crumbs={[{ label:'Insights', to:'/insights' }, { label:a.category }]} />
      <article className="section">
        <div className="container">
          <p className="meta" style={{ color:'var(--c-text-secondary)' }}>
            {new Date(a.date).toLocaleDateString()} · {a.read} read · {a.category}
          </p>
          <div className="prose">
            <p>This is illustrative article content. In production, this page is populated from the CMS with the verified article body, author, publication date, and reading time.</p>
            <h2>Context</h2>
            <p>Mining operations face pressure to improve value and deliver plans that can be executed on site.</p>
            <h2>Practical steps</h2>
            <p>Clear framing, integrated planning, and operational realism are the foundations of practical mining advisory.</p>
          </div>
        </div>
        <div className="container split" style={{ marginTop:'var(--s-7)' }}>
          <div>
            <h3>Related articles</h3>
            <ul style={{ display:'grid', gap:'var(--s-3)' }}>
              {related.map((r) => (
                <li key={r.slug}><Link className="link-arrow" to={`/insights/${r.slug}`}>{r.title} <i className="bx bx-right-arrow-alt" aria-hidden="true" /></Link></li>
              ))}
            </ul>
          </div>
        </div>
      </article>
      <CTABand />
    </>
  );
}