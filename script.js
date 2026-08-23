
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `slideInUp 0.6s ease forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .stat-card, .education-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        opacity: 1;
        text-decoration: underline;
        text-underline-offset: 5px;
    }
`;
document.head.appendChild(style);

window.addEventListener('load', () => {
    document.body.style.animation = 'none';
});
