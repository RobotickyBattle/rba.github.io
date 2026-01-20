document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("stats");
  if (!section) return;

  const counters = section.querySelectorAll(".counter");
  let animated = false;

  const countUp = () => {
    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      let value = 0;
      const step = Math.max(1, Math.floor(target / 100));

      const update = () => {
        value += step;
        if (value >= target) {
          counter.textContent = target;
        } else {
          counter.textContent = value;
          requestAnimationFrame(update);
        }
      };

      update();
    });
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          animated = true;
          countUp();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
  } else {
    // Fallback for older browsers
    countUp();
  }
});
