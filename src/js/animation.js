const btn = document.querySelector(".fa-angle-right");
const gear1 = document.querySelector(".gear1");
const gear2 = document.querySelector(".gear2");
const gear3 = document.querySelector(".gear3");

const arrowAnimation = btn.animate([
  { transform: "translateX(0)" },
  { transform: "translateX(5px)" },
  { transform: "translateX(-3px)" },
  { transform: "translateX(0)" }
], {
    duration: 1200,
    iterations: Infinity
});


const gearAnimation1 = gear1.animate([
    { transform: "rotate(0deg)" },
    { transform: "rotate(360deg)" }
], {
    duration: 3000,
    iterations: Infinity
});
const gearAnimation2 = gear2.animate(
    [{ transform: "rotate(0deg)" },
    { transform: "rotate(360deg)" }],
  {
    duration: 3000,
    iterations: Infinity,
  }
);
const gearAnimation3 = gear3.animate(
    [{ transform: "rotate(0deg)" },
    { transform: "rotate(360deg)" }],
  {
    duration: 3000,
    iterations: Infinity,
  }
);