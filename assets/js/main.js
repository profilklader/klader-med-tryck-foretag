var $ = jQuery.noConflict();

$(document).ready(function($) {
    "use strict";

    $('.animated').appear(function(){
        var el = $(this);
        var anim = el.data('animation');
        var animDelay = el.data('delay');
        if (animDelay) {

            setTimeout(function(){
                el.addClass( anim + " in" );
                el.removeClass('out');
            }, animDelay);

        }

        else {
            el.addClass( anim + " in" );
            el.removeClass('out');
        }    
    },{accY: -150});  

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
            easing: 'swing'
        }, 750);
        return false;
    });



});

$(window).load(function(){
    "use strict";

    $("#loading-animation").fadeOut();

    $("#preloader").delay(600).fadeOut("slow");

});