document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.animate-header');
    header.classList.add('slide-up');
});

document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('article');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    projects.forEach(project => {
        observer.observe(project);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    projects.forEach(project => {
        observer.observe(project);
    });
});
