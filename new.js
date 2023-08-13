$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
        $('section').toggleClass('okay');


    });
    $(window).on('scroll load', function() {
        $(this).removeClass('fa-times');
        $('header').removeClass('toggle');
        $('section').removeClass('okay');
        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }


    });
    // smooth sccrolling
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );
});


});