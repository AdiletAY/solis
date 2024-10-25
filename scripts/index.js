
const navigationElement = document.querySelector('#navigation');
const burgerCloseButton = document.querySelector('#burger_close');
const burgerOpenButton = document.querySelector('#burger_btn');
const navigationLinks = navigationElement.querySelectorAll('a');
const tabs = document.querySelectorAll(".tab");

const burgerMenuOpen = (e) => {

  navigationElement.setAttribute('data-opened', 'true')
  document.body.classList.add('overflow-hidden')

}

const burgerMenuClose = (e) => {

  navigationElement.setAttribute('data-opened', 'false')
  document.body.classList.remove('overflow-hidden')

}

burgerOpenButton.addEventListener('click', burgerMenuOpen);
burgerCloseButton.addEventListener('click', burgerMenuClose);
navigationLinks.forEach(l => {
  l.addEventListener('click', burgerMenuClose);
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));

    tab.classList.add("active");
  });
});

const casesSwiper = new Swiper(".casesSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

const servicesSwiper = new Swiper(".servicesSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

const teammatesSwiper = new Swiper(".teammatesSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

const newsSwiper = new Swiper(".newsSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

const feedbackSwiper = new Swiper(".feedbackSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const partnersSwiper = new Swiper(".partnersSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    425: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});
