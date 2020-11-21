$(function(){

    $('.partners-slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
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

});
