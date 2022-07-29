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
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 0.25 },
  },
};

const data = [
  {
    id: 1,
    image: CODEJOURNAL,
    title: 'Code Journal',
    github: 'https://github.com/PeterSYoo/code-journal',
    demo: '',
  },
  {
    id: 2,
    image: TASKTRACKER,
    title: 'Task Tracker',
    github: 'https://github.com/PeterSYoo/task_tracker',
    demo: 'https://task-tracker-peter.herokuapp.com/',
  },
  {
    id: 3,
    image: FINCHCOLLECTOR,
    title: 'Finch Collector',
    github: 'https://github.com/PeterSYoo/finch_collector',
    demo: 'https://finch-collector-py.herokuapp.com/',
  },
  {
    id: 4,
    image: GREETR,
    title: 'Greetr Library/Framework',
    github: 'https://github.com/PeterSYoo/greetr-framework',
    demo: '',
  },
  {
    id: 5,
    image: SKATEREACT,
    title: 'Skate React - Lead Frontend Developer',
    github: 'https://github.com/abacqu/skate-shop-frontend',
    demo: 'https://skate-react.netlify.app/',
  },
  {
    id: 6,
    image: TTEOKBOWL,
    title: 'Tteok Bowl',
    github: 'https://github.com/PeterSYoo/tteokBowl',
    demo: 'https://warm-brook-32210.herokuapp.com/',
  },
  {
    id: 7,
    image: RANDOMLIT,
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
        {data.map(({ id, image, title, github, demo }) => {
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
              <div className="portfolio__item-cta">
                <motion.a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                  variants={btnAnimate}
                >
                  Github
                </motion.a>
                {demo ? (
                  <motion.a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                    variants={btnAnimate}
                  >
                    Live Demo
                  </motion.a>
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
