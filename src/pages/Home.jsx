import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHead from '../components/SectionHead';
import CTABand from '../components/CTABand';
import { expertise, insights, projects, capabilityStrip } from '../data/site';

export default function Home() {
  return (
    <>
      <Hero
        image="../src/assets/minepic.avif"
        eyebrow="Mining Consultancy"
        title={<>Unlock greater value across the mine lifecycle.</>}
        lead="An integrated mining consultancy focused on strategy, technical planning, operational improvement, and measurable mining performance."
        actions={<>
          <Link to="/expertise" className="btn btn-primary">Explore our expertise <i className="bx bx-right-arrow-alt" aria-hidden="true" /></Link>
          <Link to="/contact" className="btn btn-secondary">Talk to our team</Link>
        </>}
      />

      <section className="capstrip" aria-label="Core capabilities">
        <div className="container capstrip__inner">
          {capabilityStrip.map((c) => (
            <div className="capstrip__item" key={c.title}>
              <i className={`bx ${c.icon}`} aria-hidden="true" />
              <strong>{c.title}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section band-alt">
        <div className="container split">
          <div>
            <span className="eyebrow">About EnableMining</span>
            <h2>Practical mining consultancy, grounded in operations.</h2>
          </div>
          <div className="prose">
            <p>EnableMining supports mining companies across strategy, technical planning, and operational performance. We combine technical depth with a practical understanding of how mining operations actually work.</p>
            <p>Our consulting philosophy is built on clear thinking, integrated solutions, and plans that can be delivered on site.</p>
            <Link to="/about" className="link-arrow">About us <i className="bx bx-right-arrow-alt" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            title="Our Expertise"
            intro="An integrated set of services to plan, design and deliver more productive and resilient mining operations."
            link={{ to:'/expertise', label:'View all expertise' }}
          />
          <div className="cards-grid">
            {expertise.map((e) => (
              <Link key={e.slug} to={`/expertise/${e.slug}`} className="img-card">
                <img src={e.imgUrl} alt="" aria-hidden="true" />
                <h3>{e.title} <i className="bx bx-right-arrow-alt" aria-hidden="true" /></h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-alt">
        <div className="container split">
          <div>
            <span className="eyebrow">Industries & Commodities</span>
            <h2>Focused on the sectors we know best.</h2>
          </div>
          <div className="prose">
            <p><strong>Coal.</strong> Strategic and technical support across the coal mining lifecycle.</p>
            <p><strong>Metalliferous mining.</strong> Planning, design, and operational support for metalliferous operations.</p>
            <Link to="/industries" className="link-arrow">Explore industries <i className="bx bx-right-arrow-alt" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <SectionHead
            title="Selected Projects"
            link={{ to:'/projects', label:'View all projects' }}
          />
          <div className="feature">
            <img src="https://images.unsplash.com/photo-1523848309072-c199db53f137?auto=format&fit=crop&w=1200&q=70" alt="Open-pit mine with haul truck" />
            <div className="feature__body">
              <span className="eyebrow">Case Study</span>
              <h3>{projects[0].title}</h3>
              <p>{projects[0].summary}</p>
              <Link to={`/projects/${projects[0].slug}`} className="link-arrow" style={{ color:'#fff' }}>
                Read case study <i className="bx bx-right-arrow-alt" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section band-alt">
        <div className="container">
          <SectionHead
            title="Latest Insights"
            link={{ to:'/insights', label:'View all insights' }}
          />
          <div className="insights-grid">
            {insights.map((a) => (
              <article key={a.slug} className="insight">
                <img src="../assets/minepic.avif" alt="" aria-hidden="true" />
                <span className="tag">{a.category}</span>
                <h3><Link to={`/insights/${a.slug}`}>{a.title}</Link></h3>
                <span className="meta">{new Date(a.date).toLocaleDateString()} · {a.read} read</span>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <CTABand />
    </>
  );
}