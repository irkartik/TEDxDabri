/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
  'particles-js',

  {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 450,
        },
      },
      color: {
        value: '#ee3724',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ee3724',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
          mode: 'repulse',
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
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
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
    config_demo: {
      hide_card: false,
      background_color: '#202020',
      background_image: '',
      background_position: '50% 50%',
      background_repeat: 'no-repeat',
      background_size: 'cover',
    },
  }
);

$('#DateCountdown').TimeCircles({
  animation: 'ticks',
  bg_width: 0.2,
  fg_width: 0.03333333333333333,
  circle_bg_color: '#fcfcfc',
  time: {
    Days: {
      text: 'Days',
      color: '#ee3724',
      show: true,
    },
    Hours: {
      text: 'Hours',
      color: '#ee3724',
      show: true,
    },
    Minutes: {
      text: 'Minutes',
      color: '#ee3724',
      show: true,
    },
    Seconds: {
      text: 'Seconds',
      color: '#ee3724',
      show: true,
    },
  },
});

const loaderCtr = document.querySelector('.loader-ctr');
const urlParams = new URLSearchParams(window.location.search);
const snackbar = document.getElementById('snackbar');

if (urlParams.get('l') === 'f') {
  loaderCtr.style.display = 'none';
  snackbar.className = 'show';
  setTimeout(() => {
    snackbar.className = snackbar.className.replace('show', '');
  }, 6000);
} else {
  setTimeout(() => {
    loaderCtr.style.opacity = '0';
    loaderCtr.addEventListener('transitionend', () => {
      loaderCtr.style.display = 'none';
    });
  }, 6200);
}

const canvas = document.querySelector('.time_circles canvas');
const timeDivs = document.querySelectorAll('.time_circles div');
window.addEventListener('resize', e => {
  // item.style.width = `${canvas.width * 0.25}px`;
  // if (canvas.width < 700) item.style.width = `${canvas.width}px`;
  $('#DateCountdown')
    .TimeCircles()
    .rebuild();
});
