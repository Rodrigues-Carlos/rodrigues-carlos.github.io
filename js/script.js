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

function update() {
  stars.forEach(s => {
    s.y += s.d;
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  draw();
  update();
  requestAnimationFrame(animate);
}

animate();
const projects = [
  //Premiere
    {
      category: 'premiere',
      type: 'video',
      src: 'midia/Projeto Premiere/carro.mp4',
      title: 'Vídeo automobilístico',
      desc: 'Vídeo cinematico automobilístico'
    },
    {
      category: 'premiere',
      type: 'video',
      src: 'midia/Projeto Premiere/moto.mp4',
      title: 'Clipe cinematográfico moto',
      desc: 'Vídeo cinemático motocicleta'
    },
    // Vídeos YouTube
    {
      category: 'premiere',
      type: 'video',
      src: 'https://www.youtube.com/embed/NhFd7FyaFMM',
      title: 'FUI NA BSG 2023 E FOI INSANO!',
      desc: 'Edição de vídeo canal Estafera'
    },
    {
      category: 'premiere',
      type: 'video',
      src: 'https://www.youtube.com/embed/W_fzAHkHG-M',
      title: 'REVIEW DT3 NERO - RECEBI MINHA NOVA CADEIRA GAMER!',
      desc: 'Edição de vídeo canal Estafera'
    },
    {
      category: 'premiere',
      type: 'video',
      src: 'https://www.youtube.com/embed/ZJ53jgDKg6M',
      title: 'DURO COMO PEDRA - O MELHOR BRIMSTONE QUE VOCÊ VAI VER HOJE',
      desc: 'Highlight canal Estafera '
    },
    {
      category: 'premiere',
      type: 'video',
      src: 'https://www.youtube.com/embed/VMxyt4D9UTs',
      title: 'Moonlight 🌑',
      desc: 'Highlight canal Carlospsita'
    },
    {
      category: 'premiere',
      type: 'video',
      src: 'https://www.youtube.com/embed/Hltn3sU8Cfc',
      title: '100 condições, COD.exe',
      desc: 'Highlight canal Carlospsita'
    },
    {
      category: 'premiere',
      type: 'video',
      src: 'https://www.youtube.com/embed/JLsjK4v4oiU',
      title: 'Hypnotic 😵',
      desc: 'Highlight canal Carlospsita'
    },
    {
      category: 'premiere',
      type: 'video',
      src: 'https://www.youtube.com/embed/tzMld5_sep0',
      title: 'Nego do caixão o melhor sniper do Brasil',
      desc: 'Highlight canal Carlospsita'
    },

    // Vídeos After Effects
{
  category: 'aftereffects',
  type: 'animacao',
  src: 'midia/Projeto After Effects/Dog.mp4',
  title: 'Dog Animation',
  desc: 'Animação gráfica para site Vira-Latas'
},
{
  category: 'aftereffects',
  type: 'animacao',
  src: 'midia/Projeto After Effects/Intro chips ao shape.mp4',
  title: 'Intro Chips ao Shape',
  desc: 'Animação intro'
},
{
  category: 'aftereffects',
  type: 'animacao',
  src: 'midia/Projeto After Effects/Iphone.mp4',
  title: 'Animação Iphone',
  desc: 'Animação primeiro projeto no After Effects'
},
{
  category: 'aftereffects',
  type: 'animacao',
  src: 'midia/Projeto After Effects/Moonlight tipografia.mp4',
  title: 'Moonlight Tipografia',
  desc: 'Tipografia para intro'
},
{
  category: 'aftereffects',
  type: 'animacao',
  src: 'midia/Projeto After Effects/veteranos final.mp4',
  title: 'Bem-vindos Veteranos',
  desc: 'Animação de boas-vindas para Octacore'
},

// Arte Photoshop
{
  category: 'photoshop',
  type: 'image',
  src: 'midia/Projeto Photoshop/A4.png',
  title: 'Cartaz Procurado',
  desc: 'Design estilo faroeste para cartaz temático'
},
{
  category: 'photoshop',
  type: 'image',
  src: 'midia/Projeto Photoshop/CyberCon.jpg',
  title: 'CyberCon 2024',
  desc: 'Criação de banner para evento de tecnologia'
},
{
  category: 'photoshop',
  type: 'image',
  src: 'midia/Projeto Photoshop/Logo Ciber copiar.jpg',
  title: 'Logo Cibersegurança',
  desc: 'Conceito de logomarca para curso Cibersegurança da PUCPR'
},
{
  category: 'photoshop',
  type: 'image',
  src: 'midia/Projeto Photoshop/moletom copiar.jpg',
  title: 'Modelo de moletom Cibersegurança',
  desc: 'Modelo de moletom de Ciebrsegurança'
},
{
  category: 'photoshop',
  type: 'image',
  src: 'midia/Projeto Photoshop/tabela dog.jpg',
  title: 'Caramelo',
  desc: 'Processo de modificação do cachorro caramelo'
},
{
  category: 'photoshop',
  type: 'image',
  src: 'midia/Projeto Photoshop/Universipraia.jpg',
  title: 'Universipraia',
  desc: 'Banner de divulgação para evento universitário'
},

// Arte Canva
{
  category: 'canva',
  type: 'image',
  src: 'midia/Projeto Canva/banner pessoal.png',
  title: 'Banner Abril verde GDSUN',
  desc: 'Banner de conscientização'
},
{
  category: 'canva',
  type: 'image',
  src: 'midia/Projeto Canva/Maio amarelo.png',
  title: 'Banner Maio Amarelo GDSUN',
  desc: 'Banner de conscientização'
},
{
  category: 'canva',
  type: 'image',
  src: 'midia/Projeto Canva/Post Linkedin.png',
  title: 'Post Abril Verde',
  desc: 'Banner de conscientização'
},
{
  category: 'canva',
  type: 'image',
  src: 'midia/Projeto Canva/Worms.jpg',
  title: 'Worms',
  desc: 'Post para o Centro Acadêmico de Cibersegurança'
}
];

function renderProjects(filter = "all") {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";

  projects.forEach((project) => {
    if (filter === "all" || project.type === filter || project.category === filter) {
      const card = document.createElement("div");
      card.classList.add("project-card", project.type);

if (project.type === 'video') {
  const isYouTube = project.src.includes('youtube.com');
  card.innerHTML = isYouTube
    ? `
      <iframe src="${project.src}" frameborder="0" allowfullscreen></iframe>
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
    `
    : `
      <video controls>
        <source src="${project.src}" type="video/mp4">
        Seu navegador não suporta vídeo.
      </video>
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
    `;
} else if (project.type === 'image') {
  card.innerHTML = `
    <img src="${project.src}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
  `;
} else if (project.type === 'animacao') {
  card.innerHTML = `
    <video controls>
      <source src="${project.src}" type="video/mp4">
      Seu navegador não suporta vídeo.
    </video>
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
  `;
}
      grid.appendChild(card);
    }
  });
}

renderProjects();

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    renderProjects(filter);
  });
});  
// Delegação para abrir imagem em modal (funciona com elementos criados dinamicamente)
document.addEventListener('click', (e) => {
  const img = e.target;
  if (img.tagName === 'IMG' && img.closest('.project-card')) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = img.src;
  }
});

document.querySelector('.close-modal').addEventListener('click', () => {
  document.getElementById('imageModal').style.display = "none";
});

document.getElementById('imageModal').addEventListener('click', (e) => {
  if (e.target.id === 'imageModal') {
    e.currentTarget.style.display = "none";
  }

});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');

    if (targetId.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(targetId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});