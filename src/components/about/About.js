import './about.scss';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-quote">
            <img
              src="https://i.imgur.com/Aws4IOA.png"
              alt="quote"
              className="quote__bg"
            />
          </div>
        </div>
        <div className="about__content">
          <p>
            Hi! My name is Peter and I’ve fallen in love with coding. I come
            from an art background, I studied illustration in college and have
            worked professionally as a storyboard artist. Tech has always been a
            part of my artist's journey. I built my own websites in basic HTML
            while doing graphic design as a teen, and I fell in love with both
            the coding and design side. I’d spend countless hours just tinkering
            away in HTML and trying new things, looking at source codes from
            other websites. I have an eye for minimalist design that's sleek and
            professional and I enjoy both the frontend and data side of coding.
            I'm always curious about new technologies and have a passion for
            learning new things.
          </p>

          <a href="#contact" className="btn btn-primary" id="lets__talk">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
