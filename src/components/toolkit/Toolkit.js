import './toolkit.scss';
import { BsCheck2Square } from 'react-icons/bs';

const Toolkit = () => {
  return (
    <section id="toolkit">
      <h5>What Skills I Have</h5>
      <h2>My toolkit</h2>
      <div className="container toolkit__container">
        <div className="toolkit__frontend">
          <h3>Frontend Development</h3>
          <div className="toolkit__content">
            <article className="toolkit__details">
              <BsCheck2Square className="toolkit__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <BsCheck2Square className="toolkit__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <BsCheck2Square className="toolkit__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <BsCheck2Square className="toolkit__details-icon" />
              <div>
                <h4>Django</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <BsCheck2Square className="toolkit__details-icon" />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <BsCheck2Square className="toolkit__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="toolkit__backend">
          <h3>Backend Development</h3>
          <div className="toolkit__content">
            <article className="toolkit__details">
              <BsCheck2Square className="toolkit__details-icon" />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <BsCheck2Square className="toolkit__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <BsCheck2Square className="toolkit__details-icon" />
              <div>
                <h4>Mongoose</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <BsCheck2Square className="toolkit__details-icon" />
              <div>
                <h4>Django</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <BsCheck2Square className="toolkit__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className="toolkit__details">
              <BsCheck2Square className="toolkit__details-icon" />
              <div>
                <h4>Python</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
