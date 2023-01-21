
mobile_ver_slick_setting = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
    pauseOnHover: false,  
    centerMode: false,
};

desktop_ver_slick_setting = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,  
    centerMode: false,
};


$(document).ready(function(){
    $(window).on('resize', function() {
        if ($(window).width() < 1181) {
            if ($('.customer-logos').hasClass('slick-initialized')) {
                $('.customer-logos').slick('unslick');
            }

            $('.customer-logos').slick(mobile_ver_slick_setting);
            return
        } else {
            if ($('.customer-logos').hasClass('slick-initialized')) {
                $('.customer-logos').slick('unslick');
            }

            $('.customer-logos').slick(desktop_ver_slick_setting);
            return
        }
    });

    if ($(window).width() < 1181) {
        if ($('.customer-logos').hasClass('slick-initialized')) {
            $('.customer-logos').slick('unslick');
        }

        $('.customer-logos').slick(mobile_ver_slick_setting);
        return
    } else {
        if ($('.customer-logos').hasClass('slick-initialized')) {
            $('.customer-logos').slick('unslick');
        }

        $('.customer-logos').slick(desktop_ver_slick_setting);
        return
    }
});