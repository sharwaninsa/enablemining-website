import { Link } from 'react-router-dom';
import HeroInt from '../components/HeroInt';
export default function NotFound() {
  return (
    <>
      <HeroInt title="Page not found" lead="The page you requested could not be found." crumbs={[{ label:'404' }]} />
      <section className="section">
        <div className="container">
          <Link className="btn btn-primary" to="/">Back to home</Link>
        </div>
      </section>
    </>
  );
}