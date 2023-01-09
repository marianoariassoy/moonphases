//Message

gsap.set(".earth-txt", {
  y: 100,
});
gsap.set(".message-1", {
  scale: 0,
});
const tl3 = gsap.timeline({});
tl3.to(".message-1", {
  delay: 0.5,
  scale: 1,
  display: "block",
  duration: 0.3,
  opacity: 1,
});
tl3.to(".message-1", {
  duration: 0.2,
  opacity: 0,
  delay: 2,
  display: "none",
});
tl3.to(".message-2", {
  display: "block",
  duration: 0.3,
  opacity: 1,
});
tl3.to(".message-2", {
  duration: 0.5,
  opacity: 0,
  delay: 2,
  display: "none",
});
tl3.to(".earth-txt", {
  y: 0,
  opacity: 1,
  duration: 0.3,
});
