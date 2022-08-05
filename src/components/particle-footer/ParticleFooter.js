import './particle-footer.scss';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleFooter = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles-footer"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        fullScreen: { enable: false },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: '#FFFFFF',
          },
          shape: {
            type: 'polygon',
            stroke: {
              width: 0,
              color: '#FFFFFF',
            },
            polygon: {
              sides: 12,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 4.872463273808071,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 4,
            direction: 'bottom-right',
            random: false,
            straight: true,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: 'windows',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: false,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.5,
              },
            },
            bubble: {
              distance: 400,
              size: 3,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 350,
              duration: 1,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticleFooter;
