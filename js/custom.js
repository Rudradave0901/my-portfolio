// --------------------------------Hamburger Menu----------------------------------------------------

  jQuery(document).ready(function ($) {

  // Dropdown menu
  $('.hamburger-menu').on('click', function () {
    $('body').toggleClass('menuopen');
    $('.hamburger-menu').toggleClass('open');
    $('.navbar-collapse').toggleClass('show');
    $('.navbar-overlay').toggleClass('show');
  });
});

// --------------------------------toggler switcher----------------------------------------------------

const styleswitchertoggle = document.querySelector(".style-switcher-toggler");
styleswitchertoggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open"); 
})

// --------------------------------hide on slide-------------------------------------------------------

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// ---------------------------------theme color---------------------------------------------------------

const alternatestyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternatestyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

// ----------------------------------light-dark theme----------------------------------------------------

const daynight = document.querySelector(".day-night");
daynight.addEventListener("click", () => {
    daynight.querySelector("i").classList.toggle("fa-sun")
    daynight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        daynight.querySelector("i").classList.add("fa-sun")
    }
    else {

        daynight.querySelector("i").classList.add("fa-moon")

    }
})

// ---------------------------------------------------Active Class changer----------------------------------------------------

const navLinks = document.querySelectorAll('#nav-item a');
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    });

// ------------------------------------Auto Jump Section On Scroll JS----------------------------------------------------   

$(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.contant-body section').each(function (i) {
            // The number at the end of the next line is how pany pixels you from the top you want it to activate.
            if ($(this).position().top <= windscroll - 0) {
                $('nav li a.active').removeClass('active');
                $('nav li a').eq(i).addClass('active');
            }
        });

    } else {

        $('nav li a.active').removeClass('active');
        $('nav li a:first').addClass('active');
    }
}).scroll();

// ---------------------------------------------------Auto Content Writing JS----------------------------------------------------

    const typed = new Typed(".typing-js", {
    strings: ['Frontend Developer', 'ReactJS Developer', 'Ethical Hacker'],
    typeSpeed: 100,
    smartBackspace: true,
    backSpeed: 50,
    backDelay: 800,
    loop: true
});