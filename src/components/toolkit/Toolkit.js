import './toolkit.scss';
import { CgCheckR } from 'react-icons/cg';
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiJquery,
  SiHtml5,
  SiCss3,
  SiPython,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiDjango,
  SiPostgresql,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { IoMdFlower } from 'react-icons/io';
import { RiBearSmileFill } from 'react-icons/ri';

const imageAnimate = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

const btnAnimate = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
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
  offScreen: { x: -300, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

const frontEndData = [
  {
    id: 1,
    icon: <SiTypescript className="toolkit__details-icon" />,
    name: 'TypeScript',
  },
  {
    id: 2,
    icon: <SiJavascript className="toolkit__details-icon" />,
    name: 'JavaScript',
  },
  {
    id: 3,
    icon: <TbBrandNextjs className="toolkit__details-icon" />,
    name: 'NextJS',
  },
  {
    id: 4,
    icon: <SiTailwindcss className="toolkit__details-icon" />,
    name: 'Tailwind CSS',
  },
  {
    id: 5,
    icon: <IoMdFlower className="toolkit__details-icon" />,
    name: 'React Query',
  },
  {
    id: 6,
    icon: <RiBearSmileFill className="toolkit__details-icon" />,
    name: 'Zustand',
  },
  {
    id: 7,
    icon: <SiReact className="toolkit__details-icon" />,
    name: 'React',
  },
  {
    id: 8,
    icon: <SiJquery className="toolkit__details-icon" />,
    name: 'jQuery',
  },
  {
    id: 9,
    icon: <SiHtml5 className="toolkit__details-icon" />,
    name: 'HTML',
  },
  {
    id: 10,
    icon: <SiCss3 className="toolkit__details-icon" />,
    name: 'CSS',
  },
];

const backEndData = [
  {
    id: 1,
    icon: <TbBrandNextjs className="toolkit__details-icon" />,
    name: 'NextJS',
  },
  {
    id: 2,
    icon: <SiMongodb className="toolkit__details-icon" />,
    name: 'MongoDB',
  },
  {
    id: 3,
    icon: <SiMongodb className="toolkit__details-icon" />,
    name: 'Mongoose',
  },
  {
    id: 4,
    icon: <SiExpress className="toolkit__details-icon" />,
    name: 'ExpressJS',
  },
  {
    id: 5,
    icon: <SiNodedotjs className="toolkit__details-icon" />,
    name: 'NodeJS',
  },
  {
    id: 6,
    icon: <SiDjango className="toolkit__details-icon" />,
    name: 'Django',
  },
  {
    id: 7,
    icon: <SiPostgresql className="toolkit__details-icon" />,
    name: 'PostgreSQL',
  },
  {
    id: 8,
    icon: <SiPython className="toolkit__details-icon" />,
    name: 'Python',
  },
];

const Toolkit = () => {
  return (
    <section
      id="toolkit"
      initial={'offScreen'}
      whileInView={'onScreen'}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <h5 variants={textAnimate}>What Skills I Have</h5>
      <h2 variants={textAnimate}>My toolkit</h2>
      <div className="container toolkit__container">
        {/* START OF FRONTEND */}
        <div className="toolkit__frontend" variants={btnAnimate}>
          <h3 variants={textAnimate}>Frontend Development</h3>
          <div className="toolkit__content" variants={btnAnimate}>
            {frontEndData.map(({ id, icon, name }) => {
              return (
                <article key={id} className="toolkit__details">
                  <div variants={textAnimate}>{icon}</div>
                  <div>
                    <h4 variants={text2Animate}>{name}</h4>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* END OF FRONTEND */}
        {/* START OF BACKEND */}
        <div className="toolkit__backend" variants={btnAnimate}>
          <h3 variants={textAnimate}>Backend Development</h3>
          <div className="toolkit__content" variants={btnAnimate}>
            {backEndData.map(({ id, icon, name }) => {
              return (
                <article key={id} className="toolkit__details">
                  <div variants={textAnimate}>{icon}</div>
                  <div>
                    <h4 variants={text2Animate}>{name}</h4>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* END OF BACKEND */}
      </div>
    </section>
  );
};

export default Toolkit;
