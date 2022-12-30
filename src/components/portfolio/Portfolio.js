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
      'A social media app where users can create drawings, share their drawings, like and comment on other user\u0027s drawings.',
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
      'TypeScript, NextJS, NextAuth, Tailwind CSS, React Query, Formik, Yup, MongoDB, Mongoose, Finnhub Stock API, Cloudinary',
    title: 'Tickersaver',
    github: 'https://github.com/PeterSYoo/stocksaver-nextjs-tailwind',
    demo: 'https://tickersaver.vercel.app/',
  },
  {
    id: 3,
    image: TRIPGUIDE,
    description:
      'TypeScript, NextJS, NextAuth, Tailwind CSS, React Query, Zustand, Formik, MongoDB, Mongoose',
    title: 'Trip Guide',
    github:
      'https://github.com/PeterSYoo/Hotel-Booking-App-with-Nextjs-Typescript-and-TailwindCss',
    demo: 'https://tripguide-mocha.vercel.app/',
  },
  {
    id: 4,
    image: CODEJOURNAL,
    description:
      'React, TypeScript, Redux, ESBuild, Axios, localForage, Monaco Editor, React MD Editor, Immer, Lerna',
    title: 'Code Journal',
    github: 'https://github.com/PeterSYoo/code-journal',
    demo: '',
  },
  {
    id: 5,
    image: TASKTRACKER,
    description: 'Python, JavaScript, Django, PostgreSQL, AWS, Materialize',
    title: 'Task Tracker',
    github: 'https://github.com/PeterSYoo/task_tracker',
    demo: 'https://task-tracker-peter.herokuapp.com/',
  },
  {
    id: 6,
    image: FINCHCOLLECTOR,
    description: 'Python, JavaScript, Django, PostgreSQL, AWS, Materialize',
    title: 'Finch Collector',
    github: 'https://github.com/PeterSYoo/finch_collector',
    demo: 'https://finch-collector-py.herokuapp.com/',
  },
  {
    id: 7,
    image: GREETR,
    description: 'JavaScript, jQuery',
    title: 'Greetr Library/Framework',
    github: 'https://github.com/PeterSYoo/greetr-framework',
    demo: '',
  },
  {
    id: 8,
    image: SKATEREACT,
    description: 'JavaScript, MongoDB, EJS, React, Node.js',
    title: 'Skate React - Lead Frontend Developer',
    github: 'https://github.com/abacqu/skate-shop-frontend',
    demo: 'https://skate-react.netlify.app/',
  },
  {
    id: 9,
    image: TTEOKBOWL,
    description: 'JavaScript, jQuery, Node.js, Mongoose, MongoDB, EJS',
    title: 'Tteok Bowl',
    github: 'https://github.com/PeterSYoo/tteokBowl',
    demo: 'https://warm-brook-32210.herokuapp.com/',
  },
  {
    id: 10,
    image: RANDOMLIT,
    description: 'JavaScript, jQuery, ajax, Google Books API',
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
