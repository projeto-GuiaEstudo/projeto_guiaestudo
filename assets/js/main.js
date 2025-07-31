/**
* Template Name: KnightOne
* Template URL: https://bootstrapmade.com/knight-simple-one-page-bootstrap-template/
* Updated: Oct 16 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();









// Testando JS 15/06/2025
// Codigo criado por VG para usado abrir uma tela na Section Serviços

// <!-- 1 APIs e Microserviços -->
function abrirExplicacaoDevAPIeMicroservicos() {
  document.getElementById('explicacao-overlay-devapiemicroservicos').style.display = 'flex'; 
}
function fecharExplicacaoDevAPIeMicroservicos() {
  document.getElementById('explicacao-overlay-devapiemicroservicos').style.display = 'none'; 
}


// <!-- 2 Big Data Engineering -->
function abrirExplicacaoDevBigDataEngineering() {
  document.getElementById('explicacao-overlay-devBigDataEngineering').style.display = 'flex'; 
}
function fecharExplicacaoDevBigDataEngineering() {
  document.getElementById('explicacao-overlay-devBigDataEngineering').style.display = 'none'; 
}


// <!-- 3 Chatbots e Assistentes Virtuais -->
function abrirExplicacaoDevChatbotseAssistentesVirtuais() {
  document.getElementById('explicacao-overlay-devChatbotseAssistentesVirtuais').style.display = 'flex'; 
}
function fecharExplicacaoDevChatbotseAssistentesVirtuais() {
  document.getElementById('explicacao-overlay-devChatbotseAssistentesVirtuais').style.display = 'none'; 
}


// <!-- 4 Ciência de Dados (Data Science) -->
function abrirExplicacaoDevDataScience() {
  document.getElementById('explicacao-overlay-devDataScience').style.display = 'flex'; 
}
function fecharExplicacaoDevDataScience() {
  document.getElementById('explicacao-overlay-devDataScience').style.display = 'none'; 
}


// <!-- 5 Cloud Computing -->
function abrirExplicacaoDevCC() {
  document.getElementById('explicacao-overlay-devcc').style.display = 'flex'; 
}
function fecharExplicacaoDevCC() {
  document.getElementById('explicacao-overlay-devcc').style.display = 'none';   
}


// <!-- 6 Desktop -->
function abrirExplicacaoDevDesktop() {
  document.getElementById('explicacao-overlay-devdesktop').style.display = 'flex'; 
}
function fecharExplicacaoDevDesktop() {
  document.getElementById('explicacao-overlay-devdesktop').style.display = 'none';   
}

// <!-- 7 DevOps e Engenharia de Confiabilidade (SRE) -->
function abrirExplicacaoDevDevOpseEngenhariadeConfiabilidade() {
  document.getElementById('explicacao-overlay-devDevOpseEngenhariadeConfiabilidade').style.display = 'flex'; 
}
function fecharExplicacaoDevDevOpseEngenhariadeConfiabilidade() {
  document.getElementById('explicacao-overlay-devDevOpseEngenhariadeConfiabilidade').style.display = 'none'; 
}


// <!-- 8 Engenharia de Qualidade de Software / QA -->
function abrirExplicacaoDevEngenhariadeQualidadedeSoftware() {
  document.getElementById('explicacao-overlay-devEngenhariadeQualidadedeSoftware').style.display = 'flex'; 
}
function fecharExplicacaoDevEngenhariadeQualidadedeSoftware() {
  document.getElementById('explicacao-overlay-devEngenhariadeQualidadedeSoftware').style.display = 'none'; 
}


// <!-- 9 Full Stack -->
function abrirExplicacaoDevFullStack() {
  document.getElementById('explicacao-overlay-devFullStack').style.display = 'flex'; 
}
function fecharExplicacaoDevFullStack() {
  document.getElementById('explicacao-overlay-devFullStack').style.display = 'none'; 
}


// <!-- 10 Inteligência Artificial e Machine Learning -->
function abrirExplicacaoDevIAeML() {
  document.getElementById('explicacao-overlay-deviaeml').style.display = 'flex'; 
}
function fecharExplicacaoDevIAeML() {
  document.getElementById('explicacao-overlay-deviaeml').style.display = 'none'; 
}


// <!-- 11 Jogos Digitais -->
function abrirExplicacaoDevJD() {
  document.getElementById('explicacao-overlay-devjd').style.display = 'flex'; 
}
function fecharExplicacaoDevJD() {
  document.getElementById('explicacao-overlay-devjd').style.display = 'none'; 
}


// <!-- 12 Low-code / No-code -->
function abrirExplicacaoDevLowcodeNocode() {
  document.getElementById('explicacao-overlay-devLowcodeNocode').style.display = 'flex'; 
}
function fecharExplicacaoDevLowcodeNocode() {
  document.getElementById('explicacao-overlay-devLowcodeNocode').style.display = 'none'; 
}


// <!-- 13 Mobile -->
function abrirExplicacaoDevMobile() {
  document.getElementById('explicacao-overlay-devmobile').style.display = 'flex'; 
}
function fecharExplicacaoDevMobile() {
  document.getElementById('explicacao-overlay-devmobile').style.display = 'none'; 
}


// <!-- 14 Realidade Virtual (VR) e Realidade Aumentada (AR) -->
function abrirExplicacaoDevVreAr() {
  document.getElementById('explicacao-overlay-devvrear').style.display = 'flex'; 
}
function fecharExplicacaoDevVreAr() {
  document.getElementById('explicacao-overlay-devvrear').style.display = 'none'; 
}


// <!-- 15 Robótica AI -->
function abrirExplicacaoDevRoboticaAI() {
  document.getElementById('explicacao-overlay-devRoboticaAI').style.display = 'flex'; 
}
function fecharExplicacaoDevRoboticaAI() {
  document.getElementById('explicacao-overlay-devRoboticaAI').style.display = 'none'; 
}


// <!-- 16 Sistemas de Automação Industrial -->
function abrirExplicacaoDevSistemasdeAutomaçãoIndustrial() {
  document.getElementById('explicacao-overlay-devSistemasdeAutomaçãoIndustrial').style.display = 'flex'; 
}
function fecharExplicacaoDevSistemasdeAutomaçãoIndustrial() {
  document.getElementById('explicacao-overlay-devSistemasdeAutomaçãoIndustrial').style.display = 'none'; 
}


// <!-- 17 Sistemas de Segurança da Informação (Cybersecurity) -->
function abrirExplicacaoDevCybersecurity() {
  document.getElementById('explicacao-overlay-devcybersecurity').style.display = 'flex'; 
}
function fecharExplicacaoDevCybersecurity() {
  document.getElementById('explicacao-overlay-devcybersecurity').style.display = 'none'; 
}


// <!-- 18 Sistemas Embarcados -->
function abrirExplicacaoDevSistemasEmbarcados() {
  document.getElementById('explicacao-overlay-devsistemasembarcados').style.display = 'flex'; 
}
function fecharExplicacaoDevSistemasEmbarcados() {
  document.getElementById('explicacao-overlay-devsistemasembarcados').style.display = 'none'; 
}


// <!-- 19 Sistemas para Internet das Coisas (IoT) -->
function abrirExplicacaoDevSistemasparaInternetdasCoisas() {
  document.getElementById('explicacao-overlay-devSistemasparaInternetdasCoisas').style.display = 'flex'; 
}
function fecharExplicacaoDevSistemasparaInternetdasCoisas() {
  document.getElementById('explicacao-overlay-devSistemasparaInternetdasCoisas').style.display = 'none'; 
}


// <!-- 20 Web -->
function abrirExplicacaoDevWeb() {
  document.getElementById('explicacao-overlay-devweb').style.display = 'flex'; 
}
function fecharExplicacaoDevWeb() {
  document.getElementById('explicacao-overlay-devweb').style.display = 'none'; 
}



// Fecha com ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    fecharExplicacaoDevAPIeMicroservicos();
    fecharExplicacaoDevBigDataEngineering();
    fecharExplicacaoDevChatbotseAssistentesVirtuais();
    fecharExplicacaoDevDataScience();
    fecharExplicacaoDevCC();
    fecharExplicacaoDevDesktop();
    fecharExplicacaoDevDevOpseEngenhariadeConfiabilidade();
    fecharExplicacaoDevEngenhariadeQualidadedeSoftware();
    fecharExplicacaoDevFullStack();
    fecharExplicacaoDevIAeML();
    fecharExplicacaoDevJD();
    fecharExplicacaoDevLowcodeNocode();
    fecharExplicacaoDevMobile();
    fecharExplicacaoDevVreAr();
    fecharExplicacaoDevRoboticaAI();
    fecharExplicacaoDevSistemasdeAutomaçãoIndustrial();
    fecharExplicacaoDevCybersecurity();
    fecharExplicacaoDevSistemasEmbarcados();
    fecharExplicacaoDevSistemasparaInternetdasCoisas();
    fecharExplicacaoDevWeb();
  }
});