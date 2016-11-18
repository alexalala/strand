var s = skrollr.init();
$(window).on('scroll touchmove', function () {
        if($(document).scrollTop() > 300) {
            $('body').addClass('scrolled');
        } else {
            $('body').removeClass('scrolled');
        }
});
