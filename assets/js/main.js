const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

// Mobile Menu
const btnToggle = document.querySelector(".btn-toggle");
const mobileNav = document.querySelector(".nav__mobile");
const menuIcon = document.querySelector(".btn__toggle-menu");
const closeIcon = document.querySelector(".btn__toggle-close");

btnToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("nav__mobile-none");
  mobileNav.classList.toggle("nav__mobile-active");
  document.body.classList.toggle("no-scroll");
  if (mobileNav.classList.contains("nav__mobile-active")) {
    closeIcon.classList.remove("hidden");
    menuIcon.classList.add("hidden");
  } else {
    closeIcon.classList.add("hidden");
    menuIcon.classList.remove("hidden");
  }
});

// Parallax
function parallax(e) {
  const x = (e.clientX / window.innerWidth) * 2 - 1;
  const y = (e.clientY / window.innerHeight) * 2 - 1;

  const elements = document.querySelectorAll("[data-parallax]");

  elements.forEach((element) => {
    const elementX = parseFloat(element.getAttribute("data-parallax-x")) || 20;
    const elementY = parseFloat(element.getAttribute("data-parallax-y")) || 20;
    const elementZ = parseFloat(element.getAttribute("data-parallax-z")) || 20;
    const elementW = parseFloat(element.getAttribute("data-parallax-w")) || 20;

    element.style.transform = `translateX(${x * elementX}px) translateY(${
      y * elementY
    }px)`;
    element.style.transform += ` translateX(${x * elementZ}px) translateY(${
      y * elementW
    }px)`;
  });
}

window.addEventListener("mousemove", parallax);
