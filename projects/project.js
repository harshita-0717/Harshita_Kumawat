document.addEventListener('DOMContentLoaded', () => {
      const projectSections = document.querySelectorAll('.project-container');
      
      projectSections.forEach(section => {
        section.addEventListener('mouseenter', () => {
          const glow = section.querySelector('.image-glow');
          if (glow) {
            glow.style.boxShadow = '0 0 50px 15px rgba(139, 132, 201, 0.8)';
          }
        });
        
        section.addEventListener('mouseleave', () => {
          const glow = section.querySelector('.image-glow');
          if (glow) {
            glow.style.boxShadow = '0 0 40px 10px rgba(139, 132, 201, 0.7)';
          }
        });
      });
    });