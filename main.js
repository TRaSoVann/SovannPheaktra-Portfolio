// Navigation Menu Toggle Function
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Add Shadow to Navigation Bar While Scrolling
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

// Initialize Typed.js and ScrollReveal after DOM Content is Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Typed.js
  var typingEffect = new Typed(".typedText", {
    strings: ["UX UI Designer", "FrontEnd Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });

  // Initialize ScrollReveal
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  // Basic ScrollReveal Animations
  sr.reveal(".featured-text-card", {});
  sr.reveal(".featured-name", { delay: 100 });
  sr.reveal(".featured-text-info", { delay: 200 });
  sr.reveal(".featured-text-btn", { delay: 200 });
  sr.reveal(".social_icons", { delay: 200 });
  sr.reveal(".featured-image", { delay: 300 });

  // Additional ScrollReveal Animations
  sr.reveal(".project-box", { interval: 200 });
  sr.reveal(".top-header", {});

  // ScrollReveal for Different Directions
  const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  srLeft.reveal(".about-info", { delay: 100 });
  srLeft.reveal(".contact-info", { delay: 100 });

  srRight.reveal(".skills-box", { delay: 100 });
  srRight.reveal(".form-control", { delay: 100 });
});

// Change Active Link on Scroll
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
