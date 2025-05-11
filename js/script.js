document.addEventListener("DOMContentLoaded", () => {
  const allProjectsData = [
    // Vídeos Premiere
    {
      category: 'premiere',
      type: 'local',
      src: 'midia/Projeto Premiere/carro.mp4',
      title: 'Vídeo automobilístico',
      desc: 'Vídeo cinematico automobilístico'
    },
    {
      category: 'premiere',
      type: 'local',
      src: 'midia/Projeto Premiere/moto.mp4',
      title: 'Clipe cinematográfico moto',
      desc: 'Vídeo cinemático motocicleta'
    },
    {
      category: 'premiere',
      type: 'local',
      src: 'midia/Projeto Premiere/calourada.mp4',
      title: 'Calourada Octacore',
      desc: 'Vídeo calourada Octacore 2024'
    },
    // Vídeo Instagram
    {
      category: 'premiere',
      type: 'link',
      src: 'https://www.instagram.com/reel/DJch33BRKMn/',
      title: 'Plantão 190',
      desc: 'Vídeo para divulgação da Investmoney'
    },

    // Vídeos YouTube
    {
      category: 'premiere',
      type: 'youtube',
      src: 'https://www.youtube.com/embed/NhFd7FyaFMM',
      title: 'FUI NA BSG 2023 E FOI INSANO!',
      desc: 'Edição de vídeo canal Estafera'
    },
    {
      category: 'premiere',
      type: 'youtube',
      src: 'https://www.youtube.com/embed/W_fzAHkHG-M',
      title: 'REVIEW DT3 NERO - RECEBI MINHA NOVA CADEIRA GAMER!',
      desc: 'Edição de vídeo canal Estafera'
    },
    {
      category: 'premiere',
      type: 'youtube',
      src: 'https://www.youtube.com/embed/ZJ53jgDKg6M',
      title: 'DURO COMO PEDRA - O MELHOR BRIMSTONE QUE VOCÊ VAI VER HOJE',
      desc: 'Highlight canal Estafera '
    },
    {
      category: 'premiere',
      type: 'youtube',
      src: 'https://www.youtube.com/embed/VMxyt4D9UTs',
      title: 'Moonlight 🌑',
      desc: 'Highlight canal Carlospsita'
    },
    {
      category: 'premiere',
      type: 'youtube',
      src: 'https://www.youtube.com/embed/Hltn3sU8Cfc',
      title: '100 condições, COD.exe',
      desc: 'Highlight canal Carlospsita'
    },
    {
      category: 'premiere',
      type: 'youtube',
      src: 'https://www.youtube.com/embed/JLsjK4v4oiU',
      title: 'Hypnotic 😵',
      desc: 'Highlight canal Carlospsita'
    },
    {
      category: 'premiere',
      type: 'youtube',
      src: 'https://www.youtube.com/embed/tzMld5_sep0',
      title: 'Nego do caixão o melhor sniper do Brasil',
      desc: 'Highlight canal Carlospsita'
    },

   // Vídeos After Effects
{
  category: 'aftereffects',
  type: 'local',
  src: 'midia/Projeto After Effects/Dog.mp4',
  title: 'Dog Animation',
  desc: 'Animação gráfica para site Vira-Latas'
},
{
  category: 'aftereffects',
  type: 'local',
  src: 'midia/Projeto After Effects/Intro chips ao shape.mp4',
  title: 'Intro Chips ao Shape',
  desc: 'Animação intro'
},
{
  category: 'aftereffects',
  type: 'local',
  src: 'midia/Projeto After Effects/Iphone.mp4',
  title: 'Animação Iphone',
  desc: 'Animação primeiro projeto no After Effects'
},
{
  category: 'aftereffects',
  type: 'local',
  src: 'midia/Projeto After Effects/Moonlight tipografia.mp4',
  title: 'Moonlight Tipografia',
  desc: 'Tipografia para intro'
},
{
  category: 'aftereffects',
  type: 'local',
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

  const container = document.getElementById('project-grid');

  function renderAllProjects(category) {
          container.innerHTML = '';
      const filtered = category === 'all'
        ? allProjectsData
        : allProjectsData.filter(p => p.category === category);

      if (filtered.length === 0) {
        container.innerHTML = "<p class='text-center text-muted'>Nenhum projeto encontrado para essa categoria.</p>";
        return;
      }
  
      filtered.forEach((proj, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'project-item animated-content project-' + proj.category;
        wrapper.setAttribute('data-index', index);
      
        let mediaHTML = '';
        if (proj.type === 'youtube') {
          mediaHTML = `
            <iframe 
              src="${proj.src}" 
              frameborder="0" 
              allow="autoplay; encrypted-media" 
              allowfullscreen></iframe>
          `;
        } else if (proj.type === 'local') {
          mediaHTML = `
            <video src="${proj.src}" muted autoplay loop playsinline></video>`;              
        } else if (proj.type === 'image') {
          mediaHTML = `<img src="${proj.src}" alt="${proj.title}" />`;
        } else if (proj.type === 'link') {
        }

        wrapper.innerHTML = `
          <div class="video-wrapper">
            ${mediaHTML}
            <div class="project-overlay">
              <strong>${proj.title}</strong><br>
              <small>${proj.desc}</small>
            </div>
          </div>`;

          wrapper.addEventListener("click", () => openLightbox(proj));
        container.appendChild(wrapper);
      });      
  
    animateOnScroll();
  }
  
  function animateOnScroll() {
    document.querySelectorAll(".animated-content").forEach(el => {
      const pos = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (pos < windowHeight * 0.85) {
        el.classList.add("show");
      }
    });
  }

  document.querySelectorAll(".nav-link[data-category]").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      this.classList.add("active");
      const cat = this.getAttribute("data-category");
      renderAllProjects(cat);
    });
  });
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
    el.setAttribute('tabindex', '-1');
  });

  window.addEventListener("scroll", animateOnScroll);
  renderAllProjects('all');
});

function openLightbox(proj) {
  let lightbox = document.getElementById("lightbox");

  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.innerHTML = `
      <button id="lightbox-close">← Voltar</button>
      <div id="lightbox-content"></div>
    `;
    document.body.appendChild(lightbox);
  }

  const content = document.getElementById("lightbox-content");
  const closeBtn = document.getElementById("lightbox-close");

  if (proj.type === 'link') {
    window.open(proj.src, '_blank');
    return;
  }

  // Remove qualquer vídeo anterior
  content.innerHTML = "";

  // Aplica conteúdo
  if (proj.type === 'youtube') {
    content.innerHTML = `
      <iframe 
        src="${proj.src}?autoplay=1" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen
        style="width: 90vw; height: 80vh;"></iframe>`;
  } else if (proj.type === 'local') {
    content.innerHTML = `
      <video src="${proj.src}" autoplay controls style="max-width: 100%; max-height: 80vh;"></video>`;
  } else if (proj.type === 'image') {
    content.innerHTML = `<img src="${proj.src}" alt="${proj.title}" style="max-width: 100%; max-height: 80vh;">`;
  }

  // Ativa lightbox
  lightbox.classList.add("active");

  // Evento para fechar
  lightbox.onclick = (e) => {
    if (e.target === lightbox || e.target === closeBtn) {
      lightbox.classList.remove("active");
      content.innerHTML = "";
    }
  };
}