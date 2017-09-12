if (/Mobi/.test(navigator.userAgent)) {
    $('.skills').removeClass('animatedParent');
    $('.skills li').removeClass('animated bounceInDown');
}

$('.start-button').click(function() {
    $('html,body').animate({
        scrollTop: $('.service-container').offset().top},
        'slow');
});
