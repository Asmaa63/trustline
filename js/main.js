const counters = document.querySelectorAll(".counter");
const speed = 150;

const animateCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

const counterSection = document.getElementById("counter");
let hasAnimated = false;

window.addEventListener("scroll", () => {
  const sectionTop = counterSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (!hasAnimated && sectionTop < screenHeight - 100) {
    animateCounters();
    hasAnimated = true;
  }
});

let current = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 5000);
