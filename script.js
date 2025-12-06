/* =========================================================
   AUTOMATIC TESTIMONIAL CAROUSEL
========================================================= */

let index = 0;
const carousel = document.getElementById("carousel-inner");
const totalSlides = carousel.children.length;

setInterval(() => {
  index = (index + 1) % totalSlides;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}, 3500);


/* =========================================================
   SMOOTH SCROLL FOR INTERNAL LINKS
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});


/* =========================================================
   NAVBAR SHRINK ON SCROLL
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.padding = "12px 30px";
    navbar.style.background = "rgba(0,0,0,0.65)";
    navbar.style.backdropFilter = "blur(20px)";
  } else {
    navbar.style.padding = "18px 30px";
    navbar.style.background = "rgba(0,0,0,0.45)";
  }
});


/* =========================================================
   MOBILE MENU HANDLER (future-proof)
========================================================= */

// If you add a hamburger menu later, this logic is ready.
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
  });
}


/* =========================================================
   SCROLL REVEAL ANIMATION (subtle + smooth)
========================================================= */

const revealElements = document.querySelectorAll(
  ".glass-card, .section-title, .hero-title, .hero-sub, .process-step, .pricing-card"
);

const revealOnScroll = () => {
  const windowBottom = window.innerHeight + window.scrollY;

  revealElements.forEach((el) => {
    const elementBottom = el.offsetTop + el.offsetHeight / 4;

    if (windowBottom > elementBottom) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

// Initial state
revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.7s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
