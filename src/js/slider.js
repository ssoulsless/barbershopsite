let toggle;
let slider__item;
let isSlicked = false;

$(document).ready(function () {
    if ($(document).width() < 768) {
        slickify();
    };
});

$(window).resize(function () {
    let $windowWidth = $(document).width();
    if (($windowWidth >= 768) & (isSlicked)) {
        $('.slider__list').slick("unslick");
        isSlicked = false;
    }
    if (($windowWidth < 767) & (!isSlicked)) {
        slickify();
    };
});

$('.slider__list').on('swipe', function () {
    for (let n = 0; n < toggle.length; n++) {
        slider__item[n].classList.remove("slider__item--current");
        toggle[n].src = "./img/slider indicator.svg";
        toggle[n].classList.remove("slider__toggle--current");
    };
    let i = $('.slider__list').slick('slickCurrentSlide');
    toggle[i].classList.add("slider__toggle--current");
    toggle[i].src = "./img/current slider.svg";
    slider__item[i].classList.add("slider__item--current");
});

function slickify() {
    isSlicked = true;
    toggle = $(".slider__toggle");
    slider__item = $(".slider__item");
    $('.slider__list').slick({
        slider__item: 3,
        infinite: false,
        mobileFirst: true
    });
}
