import { useEffect } from 'react';
import './app.scss';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Toolkit from './components/toolkit/Toolkit';

const App = () => {
  useEffect(() => {
    window.location.href = 'https://peteryoo.vercel.app/';
  }, []);

  return (
    <>
      {/* <Header />
      <Nav />
      <About />
      <Toolkit />
      <Portfolio />
      <Contact />
      <Footer /> */}
    </>
  );
};

export default App;
