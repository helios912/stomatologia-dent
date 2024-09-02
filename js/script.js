$(document).ready(function () {
  $(".carusele__wrapper").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    arrows: false,
    infinite: true,
  });
  $(".reviews__slider").slick({
    slidesToShow: 4,
    infinite: true,
    adaptiveHeight: true,
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="./images/arrow-down.svg" alt=""></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="./images/arrow-up.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".specialists__left-slider").slick({
    slidesToShow: 3,
    infinite: true,
    vertical: true,
    slidesToScroll: 1,
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="./images/arrow-down.svg" alt=""></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="./images/arrow-up.svg" alt=""></button>',
    asNavFor: ".specialists__right-slider",
    responsive: [
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".specialists__right-slider").slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    asNavFor: ".specialists__left-slider",
  });

  $(function () {
    $("#container1").twentytwenty({
      before_label: "До", // Set a custom before label
      after_label: "Після", // Set a custom after label
      move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
    });
  });
  $(function () {
    $("#container2").twentytwenty({
      before_label: "До", // Set a custom before label
      after_label: "Після", // Set a custom after label
      move_with_handle_only: true,
    });
  });
  $(function () {
    $("#container3").twentytwenty({
      before_label: "До", // Set a custom before label
      after_label: "Після", // Set a custom after label
      move_with_handle_only: true,
    });
  });
  $(function () {
    $("#container4").twentytwenty({
      before_label: "До", // Set a custom before label
      after_label: "Після", // Set a custom after label
      move_with_handle_only: true,
    });
  });
  $(function () {
    $("#container5").twentytwenty({
      before_label: "До", // Set a custom before label
      after_label: "Після", // Set a custom after label
      move_with_handle_only: true,
    });
  });
  $(function () {
    $("#container6").twentytwenty({
      before_label: "До", // Set a custom before label
      after_label: "Після", // Set a custom after label
      move_with_handle_only: true,
    });
  });
});
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
document.querySelectorAll(".accordeon__triger").forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("accordeon__item--active");
  });
});
function scrollToElement1() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  let menutoggle = document.querySelector(".toggle");
  let navtoggle = document.querySelector(".nav-menu__items");
  menutoggle.classList.remove("active");
  navtoggle.classList.remove("active");
}
function scrollToElement2() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  let menutoggle = document.querySelector(".toggle");
  let navtoggle = document.querySelector(".nav-menu__items");
  menutoggle.classList.remove("active");
  navtoggle.classList.remove("active");
}
function scrollToElement3() {
  document.getElementById("why").scrollIntoView({ behavior: "smooth" });
  let menutoggle = document.querySelector(".toggle");
  let navtoggle = document.querySelector(".nav-menu__items");
  menutoggle.classList.remove("active");
  navtoggle.classList.remove("active");
}
function scrollToElement4() {
  document.getElementById("reviews").scrollIntoView({ behavior: "smooth" });
  let menutoggle = document.querySelector(".toggle");
  let navtoggle = document.querySelector(".nav-menu__items");
  menutoggle.classList.remove("active");
  navtoggle.classList.remove("active");
}
function scrollToElement5() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  let menutoggle = document.querySelector(".toggle");
  let navtoggle = document.querySelector(".nav-menu__items");
  menutoggle.classList.remove("active");
  navtoggle.classList.remove("active");
}
function scrollToElement6() {
  document.getElementById("vlog").scrollIntoView({ behavior: "smooth" });
  let menutoggle = document.querySelector(".toggle");
  let navtoggle = document.querySelector(".nav-menu__items");
  menutoggle.classList.remove("active");
  navtoggle.classList.remove("active");
}

let menutoggle = document.querySelector(".toggle");

let navtoggle = document.querySelector(".nav-menu__items");
menutoggle.onclick = function () {
  menutoggle.classList.toggle("active");
  navtoggle.classList.toggle("active");
};

$("#bill").iziModal({
  width: 650,
});
$("#zapus").iziModal({
  width: 650,
});
$("#consultacia").iziModal({
  width: 650,
});
$(document).on("click", ".carusele__btn-bill", function (event) {
  event.preventDefault();
  $("#bill").iziModal("setZindex", 99999);
  $("#bill").iziModal("open", { zindex: 99999 });
  $("#bill").iziModal("open");
});

$("#zapus").iziModal();
$(document).on("click", ".zaiavka", function (event) {
  event.preventDefault();
  $("#zapus").iziModal("setZindex", 99999);
  $("#zapus").iziModal("open", { zindex: 99999 });
  $("#zapus").iziModal("open");
});

$("#consultacia").iziModal();
$(document).on("click", ".nav-menu__contacts-btn", function (event) {
  event.preventDefault();
  $("#consultacia").iziModal("setZindex", 99999);
  $("#consultacia").iziModal("open", { zindex: 99999 });
  $("#consultacia").iziModal("open");
});
new WOW().init();
