import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ChatLauncher from './ChatLauncher';

export default function Layout() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ChatLauncher />
    </>
  );
}