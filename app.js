gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: Linear.easeNone,
  duration: 0.4,
});

//Moon Phases

gsap.set(".shadow-1", {
  xPercent: 0,
});
gsap.set(".shadow-2", {
  xPercent: 102,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".moon-main",
      markers: false,
      start: "-50 top",
      end: "+=8000 100%",
      scrub: 1,
      pin: false,
      onUpdate: (self) => {
        phases(self.progress);
      },
    },
  })
  .to(".shadow-1", {
    xPercent: -50,
  })
  .to(".shadow-1", {
    xPercent: -102,
  })
  .to(".shadow-2", {
    xPercent: 50,
  })
  .to(".shadow-2", {
    xPercent: 0,
  });

//Moon

gsap.set(".moon", {
  xPercent: -50,
  yPercent: -50,
  rotate: 90,
  transformOrigin: "50% 50%",
  motionPath: {
    path: "#moon-path",
    align: "#moon-path",
  },
});
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".container",
      markers: false,
      start: "-50 top",
      end: "+=8000 100%",
      scrub: true,
      pin: false,
      markers: false,
    },
  })
  .to(".moon", {
    motionPath: {
      path: "#moon-path",
      align: "#moon-path",
      start: 0.243,
      end: 1.243,
    },
    duration: 6,
    onComplete: () => {
      window.scrollTo(0, 0);
    },
  });

//Fases

const phasesDOM = document.querySelector(".txt-phases");
let day = 1;
let phase = "";
phasesDOM.innerHTML = `DAY 1 NEW MOON`;

const phases = (num) => {
  num = Math.floor(num * 100);
  day = Math.floor((num * 28) / 100) + 1;
  if (day === 29) day = 1;

  if (day === 1) phase = "NEW MOON";
  else if (day >= 2 && day <= 6) phase = "WAXING CRESCENT";
  else if (day >= 7 && day <= 8) phase = "FIRST QUARTER";
  else if (day >= 9 && day <= 13) phase = "WAXING GIBBOUS";
  else if (day >= 14 && day <= 16) phase = "FULL MOON";
  else if (day >= 17 && day <= 20) phase = "WANING GIBBOUS";
  else if (day >= 21 && day <= 23) phase = "THIRD QUARTER";
  else if (day >= 24 && day <= 28) phase = "WANING CRESCENT";
  else phase = "";

  phasesDOM.innerHTML = `DAY ${day}  ${phase}`;
};

//Message

gsap.set(".earth-txt", {
  y: 100,
});
gsap.set(".message-1", {
  scale: 0,
});
gsap
  .timeline()
  .to(".message-1", {
    delay: 0.5,
    scale: 1,
    display: "block",
    duration: 0.3,
    opacity: 1,
  })
  .to(".message-1", {
    duration: 0.2,
    opacity: 0,
    delay: 2,
    display: "none",
  })
  .to(".message-2", {
    delay: 0.5,
    display: "block",
    duration: 0.3,
    opacity: 1,
  })
  .to(".message-2", {
    duration: 0.5,
    opacity: 0,
    delay: 2,
    display: "none",
  })
  .to(".earth-txt", {
    y: 0,
    opacity: 1,
    duration: 0.3,
  });

//Stars

const sky = document.querySelector(".sky");
const createStars = (left, top, opacity, delay) => {
  const starDOMel = document.createElement("div");
  starDOMel.classList.add("star");
  sky.appendChild(starDOMel);
  gsap.set(starDOMel, {
    left,
    top,
    delay,
    opacity,
  });
};

const randomFloat = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const ancho = window.innerWidth;
const alto = 8000;

for (let index = 1; index < 800; index++) {
  x = randomInt(1, ancho);
  y = randomInt(1, alto);
  opacity = randomFloat(0.1, 1);
  delay = randomFloat(0, 3);
  createStars(x, y, opacity, delay);
}
