import { useParams, Link } from 'react-router-dom';
import HeroInt from '../components/HeroInt';
import Accordion from '../components/Accordion';
import CTABand from '../components/CTABand';
import { expertise, insights } from '../data/site';

export default function ExpertiseDetail() {
  const { slug } = useParams();
  const item = expertise.find((e) => e.slug === slug);
  if (!item) return <HeroInt title="Not found" crumbs={[{ label:'Expertise', to:'/expertise' }]} />;
  const related = expertise.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <>
      <HeroInt
        slug={slug}
        title={item.title}
        lead={item.blurb}
        crumbs={[{ label:'Expertise', to:'/expertise' }, { label:item.title }]}
      />
      <section className="section">
        <div className="container split">
          <div><h2>Introduction</h2></div>
          <div className="prose">
            <p>Our {item.title.toLowerCase()} practice helps mining companies make clearer technical and strategic decisions. We combine technical depth with an operational perspective so that recommendations are practical and deliverable.</p>
          </div>
        </div>
      </section>
      <section className="section band-alt">
        <div className="container">
          <h2>Industry challenges</h2>
          <div className="split">
            <div className="prose"><p>Mining operations face pressure to improve value, manage risk, and deliver plans that can be executed on site.</p></div>
            <div className="prose"><p>Our work addresses these challenges through integrated technical and strategic advice grounded in operational reality.</p></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Services & methodology</h2>
          <Accordion items={[
            { title:'Services offered', body:<ul><li>Technical assessment</li><li>Integrated planning support</li><li>Operational review</li></ul> },
            { title:'Consulting methodology', body:<ol><li>Understand the operation</li><li>Frame the challenge</li><li>Develop options</li><li>Deliver practical outcomes</li></ol> },
            { title:'Relevant lifecycle stages', body:<p>Resource evaluation, mine design, planning, and operational delivery.</p> },
          ]} />
        </div>
      </section>
      <section className="section band-alt">
        <div className="container split">
          <div>
            <h2>Related expertise</h2>
            <ul style={{ display:'grid', gap:'var(--s-3)' }}>
              {related.map((r) => (
                <li key={r.slug}>
                  <Link className="link-arrow" to={`/expertise/${r.slug}`}>{r.title} <i className="bx bx-right-arrow-alt" aria-hidden="true" /></Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Related insights</h2>
            <ul style={{ display:'grid', gap:'var(--s-3)' }}>
              {insights.slice(0, 2).map((a) => (
                <li key={a.slug}><Link className="link-arrow" to={`/insights/${a.slug}`}>{a.title} <i className="bx bx-right-arrow-alt" aria-hidden="true" /></Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}