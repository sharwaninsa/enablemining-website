import { useParams } from 'react-router-dom';
import HeroInt from '../components/HeroInt';
import CTABand from '../components/CTABand';
import { projects } from '../data/site';

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p) return <HeroInt title="Project not found" crumbs={[{ label:'Projects', to:'/projects' }]} />;
  return (
    <>
      <HeroInt title={p.title} crumbs={[{ label:'Projects', to:'/projects' }, { label:p.title }]} />
      <section className="section">
        <div className="container split">
          <div><h2>Project overview</h2></div>
          <div className="prose">
            <p>{p.summary}</p>
            {p.draft && <p style={{ color:'var(--c-text-secondary)' }}><em>Draft — pending verification.</em></p>}
          </div>
        </div>
        <div className="container split" style={{ marginTop:'var(--s-6)' }}>
          <div><h2>Client challenge</h2></div>
          <div className="prose"><p>The client needed clearer planning and a practical approach to improve operational outcomes.</p></div>
        </div>
        <div className="container split" style={{ marginTop:'var(--s-6)' }}>
          <div><h2>Consulting approach</h2></div>
          <div className="prose"><p>We reviewed the operation, framed the technical challenge, and developed integrated options with the client.</p></div>
        </div>
        <div className="container split" style={{ marginTop:'var(--s-6)' }}>
          <div><h2>Outcomes</h2></div>
          <div className="prose"><p>Outcomes are pending verification. This section is a placeholder until verified results are provided.</p></div>
        </div>
      </section>
      <CTABand />
    </>
  );
}