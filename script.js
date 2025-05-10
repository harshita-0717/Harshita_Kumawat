const darkModeToggle = document.getElementById('dark-mode-toggle');
        const body = document.body;
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');
        const sidebar = document.getElementById('sidebar');
        const content = document.getElementById('content');

        function toggleDarkMode() {
            body.classList.toggle('dark');
            body.classList.toggle('bg-white');
            body.classList.toggle('text-gray-900');
            if (body.classList.contains('dark')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.textContent = 'Light Mode';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.textContent = 'Dark Mode';
            }
        }

        if (localStorage.getItem('darkMode') === 'enabled') {
            toggleDarkMode();
        }

        darkModeToggle.addEventListener('click', toggleDarkMode);

        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                content.classList.toggle('open');
            });
        }

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
                 if (sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                    content.classList.remove('open');
                }
            });
        });

        function updateActiveNavLink() {
            let currentSectionId = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === currentSectionId) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveNavLink);



// For SkillSets Section
window.addEventListener('DOMContentLoaded', () => {
    fetch('./skills/skillsets.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('skillsets-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading skills:', error));
});

// For Projects Section
window.addEventListener('DOMContentLoaded', () => {
    fetch('./projects/project.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('projects-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading projects:', error));
});


