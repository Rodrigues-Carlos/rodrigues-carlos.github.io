document.addEventListener("DOMContentLoaded", function () {
    let allProjects = {
        premiere: [
            "<div class='project-card'>Projeto 1 - Premiere</div>",
            "<div class='project-card'>Projeto 2 - Premiere</div>"
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

    document.querySelectorAll(".nav-link").forEach(tab => {
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