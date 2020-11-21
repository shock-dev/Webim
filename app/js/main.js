$(function(){

    $('.partners-slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    })

    $('.questions__item-head').click(function () {
        $(this).parent().toggleClass('active')
        $(this).next().slideToggle()
    })

});
