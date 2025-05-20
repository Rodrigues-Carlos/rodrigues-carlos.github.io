const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add('show');

      const progressFills = el.querySelectorAll(".progress-fill");
      progressFills.forEach(fill => {
        const percent = fill.getAttribute("data-percent");
        fill.style.width = percent;
      });

      const classicFills = el.querySelectorAll(".fill");
      classicFills.forEach(fill => {
        const width = fill.getAttribute("style")?.match(/width:\s*(\d+%)/);
        if (width) {
          fill.style.width = width[1];
        }
      });

      observer.unobserve(el);
    }
  });
}, {
  threshold: 0.15,
});

document.querySelectorAll('.card, .timeline-item').forEach(el => observer.observe(el));