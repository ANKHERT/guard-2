"use strict"

const eventOnEl = (elem, event, callback) => {
   for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener(event, callback)
   }
}

const nav = document.querySelector("[data-nav]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const header = document.querySelector("[data-header]");
const preloader = document.querySelector("[data-preloader]");

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
})

const slides = document.querySelectorAll("[data-slide]");
let index = 0;

const counters = document.querySelectorAll("[data-counter]");




// navbar

const openNav = () => {
  nav.classList.toggle('active');
  overlay.classList.toggle('active')
}

eventOnEl(navToggler, 'click', openNav);

// slider

const next = () => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active')
}

const prev = () => {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

// counter

const speed = 10;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increase = target / speed;

    if (count < target)  {
      counter.innerText = count + increase;

      setTimeout(updateCount, 502)
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

// preloader

window.addEventListener('load', () => {
  preloader.classList.add('loaded');
  document.body.classList.add('loaded')
});

// swiper

var swiper = new Swiper(".info-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1180: {
      slidesPerView: 6,
    },
    
  },
});

var swiper = new Swiper(".choose-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1180: {
      slidesPerView: 6,
    },
    
  },
});

var swiper = new Swiper(".services-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1180: {
      slidesPerView: 6,
    },
    
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 3,
    },
    
  },
});




//accordion
document.querySelectorAll(".accordion").forEach((accordions) => {
  accordions.onclick = () => {
    accordions.classList.toggle("active");
  };
});
