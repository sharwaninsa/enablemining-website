import { Link } from 'react-router-dom';
import HeroInt from '../components/HeroInt';
import CTABand from '../components/CTABand';
import { industries } from '../data/site';

export default function Industries() {
  return (
    <>
      <HeroInt title="Industries" lead="Technical and strategic expertise across coal and metalliferous mining." crumbs={[{ label:'Industries' }]} />
      <section className="section">
        <div className="container">
          <h2>Industry overview</h2>
          <p className="prose">We support mining companies across coal and metalliferous sectors with integrated technical and strategic advice.</p>
          <div className="split" style={{ marginTop:'var(--s-6)' }}>
            {industries.map((i) => (
              <div key={i.slug}>
                <h3>{i.title}</h3>
                <p className="prose">{i.blurb}</p>
                <Link className="link-arrow" to={`/industries/${i.slug}`}>Explore {i.title} <i className="bx bx-right-arrow-alt" aria-hidden="true" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}