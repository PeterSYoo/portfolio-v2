import './portfolio.scss';
import CODEJOURNAL from '../../assets/images/codejournal-thumb.png';
import TASKTRACKER from '../../assets/images/tasktracker-thumb.png';
import FINCHCOLLECTOR from '../../assets/images/finchcollector-thumb.png';
import GREETR from '../../assets/images/greetr-thumb.png';
import SKATEREACT from '../../assets/images/skatereact-thumb.png';
import TTEOKBOWL from '../../assets/images/tteokbowl-thumb.png';
import RANDOMLIT from '../../assets/images/randomlit-thumb.png';
import { motion, Variants } from 'framer-motion';

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
    image: CODEJOURNAL,
    description:
      'React, TypeScript, Redux, ESBuild, Axios, localForage, Monaco Editor, React MD Editor, Immer, Lerna',
    title: 'Code Journal',
    github: 'https://github.com/PeterSYoo/code-journal',
    demo: '',
  },
  {
    id: 2,
    image: TASKTRACKER,
    description: 'Python, JavaScript, Django, PostgreSQL, AWS, Materialize',
    title: 'Task Tracker',
    github: 'https://github.com/PeterSYoo/task_tracker',
    demo: 'https://task-tracker-peter.herokuapp.com/',
  },
  {
    id: 3,
    image: FINCHCOLLECTOR,
    description: 'Python, JavaScript, Django, PostgreSQL, AWS, Materialize',
    title: 'Finch Collector',
    github: 'https://github.com/PeterSYoo/finch_collector',
    demo: 'https://finch-collector-py.herokuapp.com/',
  },
  {
    id: 4,
    image: GREETR,
    description: 'JavaScript, jQuery',
    title: 'Greetr Library/Framework',
    github: 'https://github.com/PeterSYoo/greetr-framework',
    demo: '',
  },
  {
    id: 5,
    image: SKATEREACT,
    description: 'JavaScript, MongoDB, EJS, React, Node.js',
    title: 'Skate React - Lead Frontend Developer',
    github: 'https://github.com/abacqu/skate-shop-frontend',
    demo: 'https://skate-react.netlify.app/',
  },
  {
    id: 6,
    image: TTEOKBOWL,
    description: 'JavaScript, jQuery, Node.js, Mongoose, MongoDB, EJS',
    title: 'Tteok Bowl',
    github: 'https://github.com/PeterSYoo/tteokBowl',
    demo: 'https://warm-brook-32210.herokuapp.com/',
  },
  {
    id: 7,
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
        {data.map(({ id, image, description, title, github, demo }) => {
          return (
            <motion.article
              key={id}
              className="portfolio__item"
              initial={'offScreen'}
              whileInView={'onScreen'}
              variants={bgAnimate}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.div
                className="portfolio__item-image"
                variants={imageAnimate}
              >
                <img src={image} alt={title} />
              </motion.div>
              <motion.h3 variants={textAnimate}>{title}</motion.h3>
              <motion.h4 variants={textAnimate}>{description}</motion.h4>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" rel="noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="portfolio__github-btn"
                    variants={btnAnimate}
                  >
                    <font className="portfolio__github-text">Github</font>
                  </motion.button>
                </a>

                {demo ? (
                  <a href={demo} target="_blank" rel="noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="portfolio__demo-btn"
                      variants={btnAnimate}
                    >
                      <font className="portfolio__demo-text">Live Demo</font>
                    </motion.button>
                  </a>
                ) : null}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
