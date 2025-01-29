document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "Social Gallery",
            description: "Social Gallery es una plataforma diseñada para compartir imágenes de manera intuitiva y dinámica.",
            modalDescription: 'Social Gallery es una red social donde los usuarios registrados pueden subir imágenes a sus perfiles. Utilizando Google Auth es posible registrarse desde una cuenta existente de Google. Utilizando un Firewall para verificar el registro. \n Desarrollada con las siguientes tecnologías: \n\n Frontend: React JS \n Backend: Node.js y Express.js \n Base de Datos: MongoDB Cloud \n Servicios: Firebase y Google Auth \n\n GitHub: <a href="https://github.com/DavidMGG/RedSocialDW.git" target="_blank" >Social Gallery Project</a>',
            image: "/img/social-network.png",
            videoLink: "https://drive.google.com/file/d/1yf8RG0fDgK2uu83JEDa6Icd6Ls6eVWUp/view?usp=sharing",
        },
        {
            title: "Utilidades",
            description: "Desarrollado en Python, ofrece funcionalidades como: Extraccion de Metadatos, Compresion de Videos y Descargar contenido de YouTube (Audio/Video).",
            modalDescription: 'Es una aplicación de línea de comandos diseñada para realizar diversas tareas multimedia, como extracción de metadatos, compresión de videos y descarga de contenido desde internet. \n Desarrollada con las siguientes tecnologias: \n\n Python \n FFmpeg: Utilizado para la compresión de videos \n yt-dlp: Biblioteca para descargar contenido multimedia \n pymediainfo: Permite extraer metadatos de archivos de audio y video. \n\n GitHub: <a href="https://github.com/DavidMGG/utilidades.git" target="_blank" >Utilidades Project</a>', 
            image: "/img/cmd.jpg",
            videoLink: "https://drive.google.com/file/d/1nTqNU4AF10Tb_Ml_KLKbQvd_sFC3lywy/view?usp=sharing",
        },
        {
            title: "Sistema para Pasteleria",
            description: "Implementado en equipo, sistema a la medida enfocado en el agendamiento, cotizacion y facturacion.",
            modalDescription: 'Como parte del curso Análisis de Sistemas II, desarrollamos un sistema para optimizar la gestión operativa de K-rol’s Cakes. Este programa facilita el control eficiente de pedidos, inventario y finanzas, brindando herramientas clave para mejorar la administración del negocio. \n Desarrollado con las siguientes tecnologias: \n\n Backend: C# con .NET \nBase de Datos: MySQL \nFrontend: Angular \n Infraestructura: AWS - Instancia EC2 \n\nVideo: <a href="https://drive.google.com/file/d/1m1Sp0WV8WWE51UhC0PeH6NCP6ItuMaJN/view?usp=sharing" target="_blank" >Agradecimiento K-rol’s Cakes</a>',
            image: "/img/panaderia.jpg",
            videoLink: "https://drive.google.com/file/d/1dVINzlU1hUZfqttaaP8wPL5LEr1EeZg9/view?usp=sharing",
        }
    ];

    const projectsContainer = document.getElementById('projects-container');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close-modal');

    const openModal = (title, description) => {
        modalTitle.textContent = title;
        modalDescription.innerHTML = description;
        modal.style.display = 'flex';
    };

    const closeModalHandler = () => {
        modal.style.display = 'none';
    };

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });

    closeModal.addEventListener('click', closeModalHandler);

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <a href="${project.videoLink}" target="_blank">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </a>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.videoLink}" target="_blank" class="btn primary-btn">Ver Video</a>
                    <button class="btn secondary-btn descripcion-btn">Descripcion</button>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);

        const descripcionBtn = projectCard.querySelector('.descripcion-btn');
        descripcionBtn.addEventListener('click', () => {
            openModal(project.title, project.modalDescription);
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
