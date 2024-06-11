document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link.scrollto').forEach(link => {
      link.addEventListener('mouseover', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  