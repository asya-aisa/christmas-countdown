function christmasCountdown (){
    const christmas = new Date ('December 06, 2023 23:49');
    const now = new Date;
    const diff = christmas - now;
    
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const howMuchDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = howMuchDay;

    const howMuchHours = Math.floor (diff%msInDay/msInHour);
    document.querySelector('.hours').textContent = howMuchHours;

    const howMuchMinutes = Math.floor(diff%msInHour/msInMinute);
    document.querySelector('.minutes').textContent = howMuchMinutes;

    const howMuchSeconds = Math.floor(diff%msInMinute/msInSecond);
    document.querySelector('.seconds').textContent = howMuchSeconds;

    if (diff <= 0){
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval (time);
        clearInterval (stopborder);
        merryChristmas ();
    }

}
const time = setInterval(christmasCountdown,1000);

function border () {
    const christmas = document.querySelectorAll('.christmas');
    christmas.forEach(item => {
        item.classList.toggle('light')
    })
}
const stopborder = setInterval (border,1000);

const btn = document.querySelector('button');
btn.addEventListener('click', playSongOne);
function playSongOne () {
    document.querySelector('#song').paused?
    (document.querySelector('#song').play()) : (document.querySelector('#song').pause());

    const pause = document.querySelector('.pause');
    pause.classList.toggle('pausebtn');

    const play = document.querySelector('.play');
    play.classList.toggle('playbtn');
}

function merryChristmas () {
    document.body.classList.remove('one');
    document.body.classList.add('two');

    const head = document.querySelector('h1');
    head.textContent = 'MERRY CHRISTMAS!!!';
    head.classList.add('green');

    const box = document.querySelectorAll('.christmas');
    box.forEach (item => {
        item.classList.add('zero');
    })

    const text = document.querySelectorAll('h3');
    text.forEach(item => {
        item.classList.add('h3two');
    })

    const textTwo = document.querySelectorAll('h4');
    textTwo.forEach(item => {
        item.classList.add('h4two');
    })

    btn.classList.add('btntwo');

    const container = document.querySelector('.container');
    container.classList.add('containertwo');

    btn.removeEventListener ('click', playSongOne);

    btn.addEventListener('click', ()=> {
    document.querySelector('#song2').paused?
    (document.querySelector('#song2').play()) : (document.querySelector('#song2').pause());
    
    const pause = document.querySelector('.pause');
    pause.classList.toggle('pausebtn');

    const play = document.querySelector('.play');
    play.classList.toggle('playbtn');
    })

    if (document.querySelector('#song').paused) {
        document.querySelector('#song2').play();
        document.querySelector('.play').classList.add('playbtn');
        document.querySelector('.pause').classList.add('pausebtn');
    }
    else {
        document.querySelector('#song').pause();
        document.querySelector('#song2').play();
        document.querySelector('.play').classList.remove('playbtn');
        document.querySelector('.pause').classList.remove('pausebtn');
    }

}




particlesJS("particles-js", {
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 631.3280775270874
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "image",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "icons8-зима-16.png",
          width: 250,
          height: 250
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 8,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 150,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 40,
          duration: 2,
          opacity: 7,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  
