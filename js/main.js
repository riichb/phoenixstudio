if (/Mobi/.test(navigator.userAgent)) {
    $('.skills').removeClass('animatedParent');
    $('.skills li').removeClass('animated bounceInDown');
    $('.headline span').removeClass('lines');
}

$('.start-button').click(function() {
    $('html,body').animate({
        scrollTop: $('.service-container').offset().top},
        'slow');
});
