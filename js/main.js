$('.start-button').click(function() {
    $('html,body').animate({
        scrollTop: $('.service-container').offset().top},
        'slow');
});
