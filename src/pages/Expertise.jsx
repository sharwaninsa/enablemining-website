import { Link } from 'react-router-dom';
import HeroInt from '../components/HeroInt';
import CTABand from '../components/CTABand';
import { expertise } from '../data/site';

export default function Expertise() {
  return (
    <>
      <HeroInt
        title="Our Expertise"
        lead="An integrated set of services to plan, design and deliver more productive and resilient mining operations."
        crumbs={[{ label:'Expertise' }]}
      />
      <section className="section">
        <div className="container">
          <h2>Expertise overview</h2>
          <div className="rows">
            {expertise.map((e) => (
              <div className="row" key={e.slug}>
                <h3>{e.title}</h3>
                <p>{e.blurb}</p>
                <Link className="link-arrow" to={`/expertise/${e.slug}`}>
                  Learn more <i className="bx bx-right-arrow-alt" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section band-alt">
        <div className="container">
          <h2>Resource-to-operations lifecycle</h2>
          <ol className="timeline" aria-label="Lifecycle stages">
            {['Exploration','Resource evaluation','Mine design','Planning & scheduling','Operations','Improvement'].map((s, i) => (
              <li key={s} aria-current={i === 2 ? 'step' : undefined}>{s}</li>
            ))}
          </ol>
        </div>
      </section>
      <CTABand />
    </>
  );
}