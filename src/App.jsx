import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import ExpertiseDetail from './pages/ExpertiseDetail';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Insights from './pages/Insights';
import Article from './pages/Article';
import Careers from './pages/Careers';
import JobDetail from './pages/JobDetail';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/expertise/:slug" element={<ExpertiseDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Article />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<JobDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Legal type="privacy" />} />
          <Route path="/terms-of-use" element={<Legal type="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}