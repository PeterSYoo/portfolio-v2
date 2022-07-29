import './portfolio.scss';

const data = [
  {
    id: 1,
    image: 'https://i.imgur.com/omdbcKt.png',
    title: 'Code Journal',
    github: 'https://github.com/PeterSYoo/code-journal',
    demo: '',
  },
  {
    id: 2,
    image: 'https://i.imgur.com/wthaydW.png',
    title: 'Task Tracker',
    github: 'https://github.com/PeterSYoo/task_tracker',
    demo: 'https://task-tracker-peter.herokuapp.com/',
  },
  {
    id: 3,
    image: 'https://i.imgur.com/dq5M6Eg.png',
    title: 'Finch Collector',
    github: 'https://github.com/PeterSYoo/finch_collector',
    demo: 'https://finch-collector-py.herokuapp.com/',
  },
  {
    id: 4,
    image: 'https://i.imgur.com/XoBYMyS.png',
    title: 'Greetr Library/Framework',
    github: 'https://github.com/PeterSYoo/greetr-framework',
    demo: '',
  },
  {
    id: 5,
    image: 'https://i.imgur.com/8HttLw2.png',
    title: 'Skate React - Lead Frontend Developer',
    github: 'https://github.com/abacqu/skate-shop-frontend',
    demo: 'https://skate-react.netlify.app/',
  },
  {
    id: 6,
    image: 'https://i.imgur.com/Slr8Z3h.png',
    title: 'Tteok Bowl',
    github: 'https://github.com/PeterSYoo/tteokBowl',
    demo: 'https://warm-brook-32210.herokuapp.com/',
  },
  {
    id: 7,
    image: 'https://i.imgur.com/rQbdowK.png',
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
