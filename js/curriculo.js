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

const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = Array(100).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5 + 0.5,
  d: Math.random() * 1.5
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
  
}