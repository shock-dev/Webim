$(function(){
    new WOW({
        mobile: false
    }).init();

    $('.partners-slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

    $('.questions__item-head').click(function () {
        $(this).parent().toggleClass('active')
        $(this).next().slideToggle()
    })

    $('.burger').click(function () {
        $('body').addClass('lock')
        $('.overlay').addClass('active')
        $('.header__menu').addClass('active')
    })

    $('.overlay').click(function () {
        $('body').removeClass('lock')
        $('.overlay').removeClass('active')
        $('.header__menu').removeClass('active')
    })

});
