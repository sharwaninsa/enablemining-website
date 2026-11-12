import HeroInt from '../components/HeroInt';
export default function Legal({ type }) {
  const titles = { privacy:'Privacy Policy', terms:'Terms of Use' };
  return (
    <>
      <HeroInt title={titles[type]} crumbs={[{ label:titles[type] }]} />
      <section className="section">
        <div className="container prose">
          <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
          <p>This page provides the professional {titles[type].toLowerCase()} for EnableMining. Content is populated from the CMS and reviewed by legal counsel prior to publication.</p>
          <h2>Overview</h2>
          <p>Placeholder section — replace with verified legal content before publication.</p>
        </div>
      </section>
    </>
  );
}