// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal(); // Trigger once on load

// Animated Counters
const counters = document.querySelectorAll('.stat-number');
const speed = 200; // lower is slower

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '');
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc) + '+';
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + '+';
            }
        };
        updateCount();
    });
};

// Intersection Observer to trigger counter animation when in view
const statsSection = document.querySelector('.stats-grid');
let animated = false;
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting && !animated) {
        animateCounters();
        animated = true;
    }
}, { threshold: 0.5 });

if(statsSection) {
    observer.observe(statsSection);
}
