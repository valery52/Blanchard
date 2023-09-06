document.addEventListener('DOMContentLoaded', function () {

  // Header burger
  document.querySelector('#burgerBtn').addEventListener('click', function() {
    document.querySelector('#header__nav').classList.toggle('is-active')
    document.querySelector('#burgerBtn').classList.toggle('is-active')
    document.querySelector('#burger-img').classList.toggle('is-active')
    document.querySelector('body').classList.toggle('no-scroll')
  })

  document.querySelectorAll('.header__nav-link').forEach(function(burgerDisactive) {
    burgerDisactive.addEventListener('click', function() {
      document.querySelector('#header__nav').classList.remove('is-active')
      document.querySelector('#burgerBtn').classList.remove('is-active')
      document.querySelector('#burger-img').classList.remove('is-active')
      document.querySelector('body').classList.remove('no-scroll')
    })
  })


  // Header search
  document.querySelector('.header__search-btn').addEventListener('click', function() {
    document.querySelector('.header__form').classList.toggle('is-active')
    document.querySelector('.header__search-btn').classList.toggle('is-active')
  })

  document.querySelector('.header__form-close').addEventListener('click', function() {
    document.querySelector('.header__form').classList.remove('is-active')
    document.querySelector('.header__search-btn').classList.remove('is-active')
  })



  // Header bottom menu
  const params = {
    btnClassName: "header__item-btn",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }
  setMenuListener();

  const swiper = new Swiper('.swiper-container', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000
    }
  });

  // select - gallery

  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });



  // SWIPER gallery

  let gallerySlider = new Swiper(".gallery__slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 0,
    pagination: {
      el: ".gallery .gallery__swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__btn-next",
      prevEl: ".gallery__btn-prev"
    },

    breakpoints: {
      577: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 34
      },

      1201: {
        slidesPerView: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: 'slide-visible',

    on: {
      init: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      },
      slideChange: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      }
    }

  });



   // Tabs - catalog - artists

   document.querySelector(`[data-target="artist-one"]`).classList.add('catalog__item-left-active')
   document.querySelectorAll('.catalog__artist-link').forEach(function(catalogArtist) {
     catalogArtist.addEventListener('click', function(event) {
       event.preventDefault();
       const path = event.currentTarget.dataset.path
       document.querySelectorAll('.catalog__item-left').forEach(function(itemActive) {
         itemActive.classList.remove('catalog__item-left-active')
       })
       document.querySelector(`[data-target="${path}"]`).classList.add('catalog__item-left-active')
     })
   });

  //  Accordion - catalog

  $( "#accordion" ).accordion({
    collapsible: true,
    active: 0,
    icons: false,
    heightStyle: 'content'
  });


  // SWIPER - Events

  let eventsSlider = new Swiper(".events__slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 0,
    pagination: {
      el: ".events__swiper-pagination",
      type: "bullets",
      clickable: 'true',
    },
    navigation: {
      nextEl: ".events__btn-next",
      prevEl: ".events__btn-prev"
    },

    breakpoints: {
      577: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 34,
      },

      993: {
        slidesPerView: 3,
        grid: {
          rows: 1
        },
        spaceBetween: 27
      },

      1200: {
        slidesPerView: 3,
        grid: {
          rows: 1
        },
        spaceBetween: 50
      },
    },

    a11y: false,
    keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: 'slide-visible',

    on: {
      init: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      },
      slideChange: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      }
    }

  });

  // Check-box -> selector - Editions

  const checkBtn = document.querySelector('.editions__subtitle-check');
  checkBtn.addEventListener('click', function () {
      this.classList.toggle('is-active');
  });
  document.querySelectorAll('.editions__check-label').forEach(function(editionsCheck) {
    const input = editionsCheck.querySelector('.editions__check-input');

    input.addEventListener('change', function(event) {
      if (input.checked) {
        editionsCheck.classList.add('is-active');
      } else {
        editionsCheck.classList.remove('is-active');
      }
    })
  });




  // SWIPER Editions

  let editionsSlider = new Swiper(".editions__slides-container", {
    slidesPerView: 2,
    grid: {
      rows: 4,
      fill: "column"
    },
    spaceBetween: 30,
    pagination: {
      el: ".editions .editions__swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".editions__btn-next",
      prevEl: ".editions__btn-prev"
    },

    breakpoints: {
      577: {
        slidesPerView: 2,
        grid: {
          rows: 1,
          fill: "row"
        },
        spaceBetween: 34
      },

      769: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 50
      },

      1025: {
        slidesPerView: 3,
        grid: {
          rows: 1
        },
        spaceBetween: 50
      }
    },

    // a11y: false,
    keyboard: true // можно управлять с клавиатуры стрелками влево/вправо
  });

  // Tippy Projects

  tippy('.js-tippy', {
    theme: 'tippy-projects'
  });

  // SWIPER Projects

  let projectsSlider = new Swiper(".projects__slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    navigation: {
      nextEl: ".projects__btn-next",
      prevEl: ".projects__btn-prev"
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 34
      },
      769: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 50
      },

      1025: {
        slidesPerView: 3,
        grid: {
          rows: 1
        },
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: 'slide-visible',

    on: {
      init: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      },
      slideChange: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      }
    }

  });

  // Map - Contacts

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("contacts__map", {
      center: [55.75651093045438,37.63162020642089],
      zoom: 14,
      controls: ['zoomControl', 'geolocationControl'],
    });
    var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/contacts_mark.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
  }

  // Form validation - Contacts

  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  new window.JustValidate('.contacts__form', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 15
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      }
    },
    messages: {
      name: 'Как Вас зовут?',
      tel: {
        required: "Укажите Ваш телефон",
        function: "Недопустимый формат"
      }
    }
  });


});

