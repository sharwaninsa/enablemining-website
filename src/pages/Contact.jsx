import { useState } from 'react';
import HeroInt from '../components/HeroInt';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('submitted');
    e.currentTarget.reset();
  };
  return (
    <>
      <HeroInt title="Contact" lead="Talk to our team about your next mining challenge." crumbs={[{ label:'Contact' }]} />
      <section className="section">
        <div className="container split">
          <div>
            <h2>Contact information</h2>
            <div className="prose">
              <p><strong>Business enquiries</strong><br />
                <a href="mailto:nitin.bordia@enablemining.com">nitin.bordia@enablemining.com</a></p>
              <p><strong>Phone</strong><br />
                <a href="tel:+61412895564">+61 412 895 564</a></p>
              <p><strong>LinkedIn</strong><br />
                <a href="https://www.linkedin.com/company/enable-mining" aria-label="EnableMining on LinkedIn">linkedin.com/company/enable-mining</a></p>
            </div>
          </div>
          <div>
            <h2>Business enquiry</h2>
            {status === 'submitted' && <div className="form-status" role="status">Thank you. Your enquiry has been received.</div>}
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="field--row">
                <div className="field"><label htmlFor="c-name">Name</label><input id="c-name" required /></div>
                <div className="field"><label htmlFor="c-company">Company</label><input id="c-company" /></div>
              </div>
              <div className="field--row">
                <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" type="email" required /></div>
                <div className="field"><label htmlFor="c-phone">Phone</label><input id="c-phone" type="tel" /></div>
              </div>
              <div className="field">
                <label htmlFor="c-type">Enquiry type</label>
                <select id="c-type">
                  <option>Business enquiry</option>
                  <option>General enquiry</option>
                  <option>Careers enquiry</option>
                </select>
              </div>
              <div className="field"><label htmlFor="c-subject">Subject</label><input id="c-subject" required /></div>
              <div className="field"><label htmlFor="c-message">Message</label><textarea id="c-message" required /></div>
              <button className="btn btn-primary" type="submit">Send enquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}