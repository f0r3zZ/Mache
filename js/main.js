$(document).ready(function () {
    $('.cite-slider').slick({
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
        autoPlay: true,
        autoplaySpeed: 5000
    });

    let btn = $('.burger');
    btn.on('click', function (event) {
        $('.header-nav').toggleClass('show');
        btn.toggleClass('activeBurger');
    })
});