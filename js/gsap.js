
 const hero = document.querySelector('.hero-img');

  const images = [
    'images/hero-img-3.jpg',
    'images/hero-men.jpg',
  ];

  let current = 0;

  function changeBackground() {
    current = (current + 1) % images.length;
    hero.style.backgroundImage = `url(${images[current]})`;
  }

  // Set initial image
  hero.style.backgroundImage = `url(${images[0]})`;

  // Change every 5 seconds
  setInterval(changeBackground, 5000);

  window.addEventListener("scroll", function() {
  const hero = document.querySelector(".hero-img");
  let offset = window.pageYOffset;
  hero.style.backgroundPositionY = -offset * 1.5 + "px";
});
//  GSAP & ScrollTrigger animations for your project

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

//  Smooth scroll-like effect (but using GSAP)
gsap.to(window, {
  scrollTo: 0,
  duration: 0
});

//  Navbar fade-in
gsap.from(".site-navbar", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

//  Hero section animation
gsap.from(".hero-content", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from(".light-text", {
  opacity: 0,
  scale: 0.8,
  duration: 1.2,
  delay: 0.3,
  ease: "back.out(1.7)"
});

//  Scroll animation — content-2 section
gsap.from(".content-2 p", {
  scrollTrigger: {
    trigger: ".content-2 p",
    start: "top 80%", // when element reaches 80% viewport height
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-img-2 img", {
  scrollTrigger: {
    trigger: ".hero-img-2",
    start: "top 90%",
  },
  opacity: 0,
  scale: 0.9,
  y: 60,
  duration: 1.2,
  ease: "power2.out"
});

//  Smooth fade-up on all sections
gsap.utils.toArray("section, .content-container, .content-2").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});


