import HeroInt from '../components/HeroInt';
import CTABand from '../components/CTABand';

export default function About() {
  return (
    <>
      <HeroInt
        title="About EnableMining"
        lead="A mining consultancy built on technical depth, practical experience, and integrated advice."
        crumbs={[{ label:'About Us' }]}
      />
      <section className="section">
        <div className="container split">
          <div><h2>Who We Are</h2></div>
          <div className="prose">
            <p>EnableMining is a mining consultancy supporting clients across strategy, technical planning, and operational performance. Our team combines mining engineering expertise with a practical understanding of how operations are run.</p>
            <p>We work alongside mining companies to solve complex technical and strategic problems, from resource evaluation through to operational delivery.</p>
          </div>
        </div>
      </section>
      <section className="section band-alt">
        <div className="container">
          <h2>Our Consulting Philosophy</h2>
          <blockquote className="prose" style={{ borderLeft:'3px solid var(--c-accent)', paddingLeft:'var(--s-5)', fontStyle:'italic' }}>
            Practical, integrated advice that stands up to the realities of mining operations.
          </blockquote>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Our Approach</h2>
          <ol style={{ counterReset:'n', display:'grid', gap:'var(--s-4)', paddingLeft:0, listStyle:'none' }}>
            {['Understand the operation','Frame the challenge','Develop integrated options','Deliver practical outcomes'].map((s, i) => (
              <li key={s} style={{ borderBottom:'1px solid var(--c-border)', paddingBottom:'var(--s-4)' }}>
                <strong style={{ color:'var(--c-accent-hover)', marginRight:'var(--s-3)' }}>0{i + 1}</strong> {s}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section band-alt">
        <div className="container split">
          <div><h2>Why EnableMining</h2></div>
          <ul className="prose" style={{ display:'grid', gap:'var(--s-3)' }}>
            <li>• Integrated technical and strategic advice.</li>
            <li>• Practical plans that can be delivered on site.</li>
            <li>• Experienced mining consultants.</li>
            <li>• Clear, independent recommendations.</li>
          </ul>
        </div>
      </section>
      <CTABand />
    </>
  );
}