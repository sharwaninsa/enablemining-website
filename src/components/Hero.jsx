export default function Hero({ image, eyebrow, title, lead, actions }) {
  return (
    <section className="hero">
      <img className="hero__img" src={image} alt="" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__content">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {lead && <p className="hero__lead">{lead}</p>}
        {actions && <div className="hero__actions">{actions}</div>}
      </div>
    </section>
  );
}