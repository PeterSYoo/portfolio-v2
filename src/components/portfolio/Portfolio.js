import './portfolio.scss';
import CODEJOURNAL from '../../assets/images/codejournal-thumb.png';
import TASKTRACKER from '../../assets/images/tasktracker-thumb.png';
import FINCHCOLLECTOR from '../../assets/images/finchcollector-thumb.png';
import GREETR from '../../assets/images/greetr-thumb.png';
import SKATEREACT from '../../assets/images/skatereact-thumb.png';
import TTEOKBOWL from '../../assets/images/tteokbowl-thumb.png';
import RANDOMLIT from '../../assets/images/randomlit-thumb.png';
import NUDOODLE from '../../assets/images/nudoodle-thumb.png';
import TICKERSAVER from '../../assets/images/tickersaver-thumb.png';
import TRIPGUIDE from '../../assets/images/tripguide-thumb.png';

const imageAnimate = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 5, 0],
    transition: { type: 'spring', bounce: 0.4, duration: 0.5 },
  },
};

const bgAnimate = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: 'spring', bounce: 0.4, duration: -1 },
  },
};

const textAnimate = {
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

const text2Animate = {
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 2 },
  },
};

const btnAnimate = {
  offScreen: { x: 100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 2 },
  },
};

const data = [
  {
    id: 1,
    image: NUDOODLE,
    description:
      'A social media platform that allows users to create, share, and interact with digital drawings. Users can create their own drawings and post them on the platform, as well as like and comment on other user\u0027s drawings.',
    technologies:
      'TypeScript, NextJS, NextAuth, Tailwind CSS, React Query, React Hook Form, Yup, MongoDB, Mongoose, Cloudinary, Canvas API',
    title: 'Nudoodle',
    github: 'https://github.com/PeterSYoo/doodlezilla-nextjs-tailwind',
    demo: 'https://nudoodle.vercel.app/',
  },
  {
    id: 2,
    image: TICKERSAVER,
    description:
      'A stock tracking app that allows users to search for stocks, add them to their dashboard, and track them in real-time with updates on daily winners and losers.',
    technologies:
      'TypeScript, NextJS, NextAuth, Tailwind CSS, React Query, Formik, Yup, MongoDB, Mongoose, Finnhub Stock API, Cloudinary',
    title: 'Tickersaver',
    github: 'https://github.com/PeterSYoo/stocksaver-nextjs-tailwind',
    demo: 'https://tickersaver.vercel.app/',
  },
  {
    id: 3,
    image: TRIPGUIDE,
    description:
      'A hotel booking app that enables users to easily reserve and pay for their stay at a hotel. The app allows users to book a room and check out using Stripe, a secure online payment processing platform.',
    technologies:
      'TypeScript, NextJS, NextAuth, Tailwind CSS, React Query, Zustand, Formik, MongoDB, Mongoose',
    title: 'TripGuide (wip)',
    github:
      'https://github.com/PeterSYoo/Hotel-Booking-App-with-Nextjs-Typescript-and-TailwindCss',
    demo: 'https://tripguide-mocha.vercel.app/',
  },
  {
    id: 4,
    image: CODEJOURNAL,
    description:
      'An app that allows users to keep a digital journal of their code snippets and texts. The app features a customizable interface with cells that can contain either a markdown editor or a code editor. Users can add or delete cells as needed to organize and store their code snippets.',
    technologies:
      'TypeScript, React, Redux, ESBuild, Axios, localForage, Monaco Editor, React MD Editor, Immer, Lerna',
    title: 'Code Journal',
    github: 'https://github.com/PeterSYoo/code-journal',
    demo: '',
  },
  {
    id: 5,
    image: GREETR,
    description:
      'A library that provides a range of formal and informal greetings in both English and Spanish.',
    technologies: 'JavaScript, jQuery',
    title: 'Greetr Library/Framework',
    github: 'https://github.com/PeterSYoo/greetr-framework',
    demo: '',
  },
  {
    id: 6,
    image: RANDOMLIT,
    description:
      'An app that generates a list of books from a specified genre by consuming Google\u0027s Book API. The app allows users to randomly browse and discover new books within their preferred genre.',
    technologies: 'JavaScript, jQuery, ajax, Google Books API',
    title: 'Random Lit',
    github: 'https://github.com/PeterSYoo/randomBookGenreGenerator',
    demo: 'https://randomlit.netlify.app/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(
          ({ id, image, description, title, github, demo, technologies }) => {
            return (
              <article
                key={id}
                className="portfolio__item"
                initial={'offScreen'}
                whileInView={'onScreen'}
                variants={bgAnimate}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ staggerChildren: 0.1 }}
              >
                <div className="portfolio__item-image" variants={imageAnimate}>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{description}</h4>
                <h5>{technologies}</h5>
                <div className="portfolio__item-cta">
                  <a href={github} target="_blank" rel="noreferrer">
                    <button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="portfolio__github-btn"
                      variants={btnAnimate}
                    >
                      <font className="portfolio__github-text">Github</font>
                    </button>
                  </a>

                  {demo ? (
                    <a href={demo} target="_blank" rel="noreferrer">
                      <button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="portfolio__demo-btn"
                        variants={text2Animate}
                      >
                        <font className="portfolio__demo-text">Live Demo</font>
                      </button>
                    </a>
                  ) : null}
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
