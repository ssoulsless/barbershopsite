const toggle = $(".slider__toggle");
const slider__item = $(".slider__item");
$(document).ready(function () {
    $('.slider__list').slick({
        slider__item: 3
    });
});

$(".slider__list").on('slideChange', function (event, slick, currentSlide){
    $(".slider__toggle--current").removeClass(".slider__toggle--current");
    toggle[0].addClass(".slider__toggle--current");
    console.log("fire");
});
