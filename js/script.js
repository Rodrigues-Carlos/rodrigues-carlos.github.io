document.addEventListener("DOMContentLoaded", function () {
    let allProjects = {
        premiere: [
            `<div class="project-card video-thumb" data-video="Mídia/Projeto Premiere/calourada.mp4">
              <video class="video-preview" muted playsinline preload="metadata">
                <source src="Mídia/Projeto Premiere/calourada.mp4" type="video/mp4">
              </video>
              <div class="play-button"></div>
            </div>`,
            `<div class="project-card video-thumb" data-video="Mídia/Projeto Premiere/carro.mp4">
              <video class="video-preview" muted playsinline preload="metadata">
                <source src="Mídia/Projeto Premiere/carro.mp4" type="video/mp4">
              </video>
              <div class="play-button"></div>
            </div>`,
            `<div class="project-card video-thumb" data-video="Mídia/Projeto Premiere/moto.mp4">
              <video class="video-preview" muted playsinline preload="metadata">
                <source src="Mídia/Projeto Premiere/moto.mp4" type="video/mp4">
              </video>
              <div class="play-button"></div>
            </div>`
        ],

        aftereffects: [
            "<div class='project-card'>Projeto 1 - After Effects</div>",
            "<div class='project-card'>Projeto 2 - After Effects</div>"
        ],

        photoshop: [
            "<div class='project-card'>Projeto 1 - Photoshop</div>",
            "<div class='project-card'>Projeto 2 - Photoshop</div>"
        ],

        canva: [
            "<div class='project-card'>Projeto 1 - Canva</div>",
            "<div class='project-card'>Projeto 2 - Canva</div>"
        ]
    };

    // ✅ Troca thumbnail por player real ao clicar
    document.addEventListener("click", function (e) {
        const thumb = e.target.closest(".video-thumb");
        if (thumb) {
            const videoSrc = thumb.getAttribute("data-video");
            thumb.innerHTML = `
              <video controls autoplay>
                <source src="${videoSrc}" type="video/mp4">
                Seu navegador não suporta vídeos.
              </video>
            `;
        }
    });

    function renderProjects(category) {
        const projectContainer = document.getElementById("project-container");
        projectContainer.innerHTML = "";

        setTimeout(() => {
            allProjects[category].forEach(project => {
                const element = document.createElement("div");
                element.classList.add("col-md-4", "animated-content");
                element.innerHTML = project;
                projectContainer.appendChild(element);
            });
            animateOnScroll();
        }, 150);
    }

    document.querySelectorAll(".nav-link[data-category]").forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
            this.classList.add("active");
            const category = this.getAttribute("data-category");
            renderProjects(category);
        });
    });

    function animateOnScroll() {
        document.querySelectorAll(".animated-content").forEach(el => {
            const pos = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (pos < windowHeight * 0.85) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    renderProjects("premiere");
});