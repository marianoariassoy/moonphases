gsap.registerPlugin(ScrollTrigger);

let normalizer = ScrollTrigger.normalizeScroll();

gsap.defaults({
  ease: Linear.easeNone,
  duration: 0.4,
});

//Moon Phases

gsap.set(".shadow-1", {
  xPercent: 0,
  borderRadius: 50,
});
gsap.set(".shadow-2", {
  xPercent: 102,
  borderRadius: 50,
});

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".moon-main",
    markers: false,
    start: "-50 top",
    end: "+=8000 100%",
    scrub: true,
    pin: false,
    onUpdate: (self) => {
      phases(self.progress);
    },
  },
});
tl1.to(".shadow-1", {
  xPercent: -50,
});
tl1.to(".shadow-1", {
  xPercent: -102,
});
tl1.to(".shadow-2", {
  xPercent: 50,
});
tl1.to(".shadow-2", {
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
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    markers: false,
    start: "-50 top",
    end: "+=8000 100%",
    scrub: true,
    pin: false,
    markers: false,
  },
});
tl2.to(".moon", {
  motionPath: {
    path: "#moon-path",
    align: "#moon-path",
    start: 0.243,
    end: 1.243,
  },
  duration: 6,
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
