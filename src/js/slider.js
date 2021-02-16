let toggleAdvantages;
let sliderItemAdvantages;
let isSlicked = false;
let toggleReviews;
let sliderItemReviews;

$(document).ready(function () {
    if ($(document).width() < 768) {
        slickify();
    };
    $('.slider-reviews__list').slick({
        arrows: true
    });
    toggleReviews = $('.slider-reviews__toggle');
    sliderItemReviews = $('.slider-reviews__item');
});

$(window).resize(function () {
    let $windowWidth = $(document).width();
    if (($windowWidth >= 768) & (isSlicked)) {
        $('.slider-advantages__list').slick("unslick");
        isSlicked = false;
    }
    if (($windowWidth < 767) & (!isSlicked)) {
        slickify();
    };
});

$('.slider-advantages__list').on('swipe', function () {
    for (let n = 0; n < toggleAdvantages.length; n++) {
        toggleAdvantages[n].src = "./img/slider indicator.svg";
    };
    let i = $('.slider-advantages__list').slick('slickCurrentSlide');
    toggleAdvantages[i].src = "./img/current slider.svg";
});

$('.slider-reviews__list').on('swipe', function () {
    for (let n = 0; n < toggleReviews.length; n++) {
        toggleReviews[n].src = "./img/slider-indicator-reviews.svg";
    };
    let i = $('.slider-reviews__list').slick('slickCurrentSlide');
    toggleReviews[i].src = "./img/current-slider-reviews.svg";
});

function slickify() {
    isSlicked = true;
    toggleAdvantages = $(".slider-advantages__toggle");
    sliderItemAdvantages = $(".slider-advantages__item");
    $('.slider-advantages__list').slick({
        mobileFirst: true,
        arrows: false
    });
}


