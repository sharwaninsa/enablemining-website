import { useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroInt from '../components/HeroInt';
import { jobs } from '../data/site';

export default function JobDetail() {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);
  const [status, setStatus] = useState(null);
  if (!job) return <HeroInt title="Role not found" crumbs={[{ label:'Careers', to:'/careers' }]} />;

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('submitted');
    e.currentTarget.reset();
  };

  return (
    <>
      <HeroInt title={job.title} lead={`${job.location} · ${job.type}`} crumbs={[{ label:'Careers', to:'/careers' }, { label:job.title }]} />
      <section className="section">
        <div className="container split">
          <div>
            <h2>Role summary</h2>
            <div className="prose">
              <p>We are seeking an experienced mining professional to support our consulting work across the mining lifecycle.</p>
              <h3>Responsibilities</h3>
              <ul><li>Technical consulting across mine planning and operations.</li><li>Client engagement and project delivery.</li></ul>
              <h3>Requirements</h3>
              <ul><li>Relevant mining engineering experience.</li><li>Strong communication and analytical skills.</li></ul>
            </div>
          </div>
          <div>
            <h2>Apply</h2>
            {status === 'submitted' && (
              <div className="form-status" role="status">Thank you. Your application has been received.</div>
            )}
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="field--row">
                <div className="field"><label htmlFor="name">Full name</label><input id="name" name="name" required /></div>
                <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /></div>
              </div>
              <div className="field--row">
                <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" /></div>
                <div className="field"><label htmlFor="location">Location</label><input id="location" name="location" /></div>
              </div>
              <div className="field"><label htmlFor="resume">Resume upload</label><input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" /></div>
              <div className="field"><label htmlFor="cover">Cover letter</label><textarea id="cover" name="cover" /></div>
              <div className="field"><label htmlFor="exp">Relevant experience</label><textarea id="exp" name="exp" /></div>
              <label className="checkbox">
                <input type="checkbox" required />
                <span>I consent to EnableMining processing my application in accordance with the privacy policy.</span>
              </label>
              <button className="btn btn-primary" type="submit">Submit application</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}