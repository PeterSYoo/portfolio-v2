import './portfolio.scss';
import CODEJOURNAL from '../../assets/images/codejournal-thumb.png';
import TASKTRACKER from '../../assets/images/tasktracker-thumb.png';
import FINCHCOLLECTOR from '../../assets/images/finchcollector-thumb.png';
import GREETR from '../../assets/images/greetr-thumb.png';
import SKATEREACT from '../../assets/images/skatereact-thumb.png';
import TTEOKBOWL from '../../assets/images/tteokbowl-thumb.png';
import RANDOMLIT from '../../assets/images/randomlit-thumb.png';

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
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                {demo ? (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
