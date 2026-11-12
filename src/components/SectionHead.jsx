import { Link } from 'react-router-dom';
export default function SectionHead({ title, intro, link }) {
  return (
    <div className="sec-head">
      <div>
        {title && <h2>{title}</h2>}
        {intro && <p className="sec-head__intro">{intro}</p>}
      </div>
      {link && (
        <Link className="link-arrow sec-head__link" to={link.to}>
          {link.label} <i className="bx bx-right-arrow-alt" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}