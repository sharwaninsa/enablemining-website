import { Link } from 'react-router-dom';
import HeroInt from '../components/HeroInt';
import CTABand from '../components/CTABand';
import { jobs } from '../data/site';

export default function Careers() {
  return (
    <>
      <HeroInt title="Careers" lead="Work with a mining consultancy focused on practical, integrated advice." crumbs={[{ label:'Careers' }]} />
      <section className="section">
        <div className="container split">
          <div><h2>Working at EnableMining</h2></div>
          <div className="prose"><p>Our team combines technical depth with operational experience. We work closely with mining companies to deliver practical outcomes.</p></div>
        </div>
      </section>
      <section className="section band-alt">
        <div className="container">
          <h2>Open positions</h2>
          <div className="rows">
            {jobs.map((j) => (
              <div className="row" key={j.slug}>
                <h3>{j.title}</h3>
                <p>{j.location} · {j.type}</p>
                <Link className="link-arrow" to={`/careers/${j.slug}`}>View role <i className="bx bx-right-arrow-alt" aria-hidden="true" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}