$(document).ready(function() {
    $('.slider').slick({

        variableWidth: true,
        slidesToShow: 3,
        arrows: false,
        infinite: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    });
    $('.left').click(function() {
        $('.slider').slick('slickPrev');
    })

    $('.right').click(function() {
        $('.slider').slick('slickNext');
    })


});