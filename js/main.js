// CodeGrity - Main JavaScript

// Custom Cursor Animation
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Cursor movement with easing
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    // Follower with more delay
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';

    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effects on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .service-card, .work-card, .value-card, .team-card, input, select, textarea');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        follower.style.transform = 'scale(2)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        follower.style.transform = 'scale(1)';
    });
});

// Scroll Percentage Indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    scrollIndicator.textContent = Math.round(scrollPercent) + '%';
    scrollProgress.style.width = scrollPercent + '%';

    // Activate indicator when scrolling
    if (scrollPercent > 0) {
        scrollIndicator.classList.add('active');
    } else {
        scrollIndicator.classList.remove('active');
    }
});

// Nav scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Set active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
