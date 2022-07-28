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
    image: 'https://i.imgur.com/omdbcKt.png',
    title: 'Code Journal',
    github: 'https://github.com/PeterSYoo/code-journal',
    demo: '',
  },
  {
    id: 4,
    image: 'https://i.imgur.com/omdbcKt.png',
    title: 'Code Journal',
    github: 'https://github.com/PeterSYoo/code-journal',
    demo: '',
  },
  {
    id: 5,
    image: 'https://i.imgur.com/omdbcKt.png',
    title: 'Code Journal',
    github: 'https://github.com/PeterSYoo/code-journal',
    demo: '',
  },
  {
    id: 6,
    image: 'https://i.imgur.com/omdbcKt.png',
    title: 'Code Journal',
    github: 'https://github.com/PeterSYoo/code-journal',
    demo: '',
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
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
