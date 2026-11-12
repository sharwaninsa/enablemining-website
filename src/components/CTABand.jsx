import { Link } from 'react-router-dom';
export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="container">
        <h2>Let’s discuss your next mining challenge.</h2>
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'var(--s-5)' }}>Contact Us</Link>
      </div>
    </section>
  );
}