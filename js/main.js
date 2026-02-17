// CodeGrity - Main JavaScript

// Custom Cursor Animation
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

if (cursor && follower) {
  let mouseX = 0,
    mouseY = 0;
  let cursorX = 0,
    cursorY = 0;
  let followerX = 0,
    followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Cursor hover effects — run after nav is injected
  function bindCursorHovers() {
    document
      .querySelectorAll(
        "a, button, .service-card, .work-card, .value-card, .team-card, input, select, textarea",
      )
      .forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursor.style.transform = "scale(2)";
          follower.style.transform = "scale(2)";
        });
        el.addEventListener("mouseleave", () => {
          cursor.style.transform = "scale(1)";
          follower.style.transform = "scale(1)";
        });
      });
  }
  // Bind immediately for existing elements, then again after nav loads
  bindCursorHovers();
  document.addEventListener("DOMContentLoaded", bindCursorHovers);
}

// Scroll Percentage Indicator
const scrollIndicator = document.querySelector(".scroll-indicator");
const scrollProgress = document.querySelector(".scroll-progress");

if (scrollIndicator && scrollProgress) {
  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

    scrollIndicator.textContent = Math.round(scrollPercent) + "%";
    scrollProgress.style.width = scrollPercent + "%";

    if (scrollPercent > 0) {
      scrollIndicator.classList.add("active");
    } else {
      scrollIndicator.classList.remove("active");
    }
  });
}

// Nav scroll effect — wait for nav.js to inject the nav first
window.addEventListener("scroll", () => {
  const nav = document.getElementById("site-nav");
  if (nav) {
    nav.classList.toggle("scrolled", window.scrollY > 100);
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
