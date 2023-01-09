//Stars

const sky = document.querySelector(".sky");

const createStars = (left, top, opacity) => {
  const starDOMel = document.createElement("div");
  starDOMel.classList.add("star");
  sky.appendChild(starDOMel);

  gsap.set(starDOMel, {
    left,
    top,
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
  createStars(x, y, opacity);
}
