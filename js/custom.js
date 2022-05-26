(function($) {
    "use strict";


    /* ..............................................
	Loader 
    ................................................. */

    $(window).on('load', function() {
        $('.preloader').fadeOut();
        $('#preloader').delay(550).fadeOut('slow');
        $('body').delay(450).css({ 'overflow': 'visible' });
    });

    /* ..............................................
    Navbar Bar
    ................................................. */

    $('.navbar-nav .nav-link').on('click', function() {
        var toggle = $('.navbar-toggler').is(':visible');
        if (toggle) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    /* ..............................................
    Fixed Menu
    ................................................. */

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.top-header').addClass('fixed-menu');
        } else {
            $('.top-header').removeClass('fixed-menu');
        }
    });

    /* ..............................................
    Gallery
    ................................................. */

    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    //return item.el.attr('title')+'<small>Yearly fest at</small>';
                    return item.el.attr('title') + '<small>KLE\'S BCA </small>';
                }
            }
        });
    });

    /* ..............................................
    Smooth Scroll
    ................................................. */

    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 65,
                }, 1000);
                return false;
            }
        }
    });

}(jQuery));

const countDownClock = (number = 100, format = 'seconds') => {

    const d = document;
    const daysElement = d.querySelector('.days');
    const hoursElement = d.querySelector('.hours');
    const minutesElement = d.querySelector('.minutes');
    const secondsElement = d.querySelector('.seconds');
    let countdown;
    convertFormat(format);


    function convertFormat(format) {
        switch (format) {
            case 'seconds':
                return timer(number);
            case 'minutes':
                return timer(number * 60);
            case 'hours':
                return timer(number * 60 * 60);
            case 'days':
                return timer(number * 60 * 60 * 24);
        }
    }

    function timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft <= 0) {
                clearInterval(countdown);
                return;
            };

            displayTimeLeft(secondsLeft);

        }, 1000);
    }

    function displayTimeLeft(seconds) {
        daysElement.textContent = Math.floor(seconds / 86400);
        hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
        minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
        secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
}


/*
	start countdown
	enter number and format
	days, hours, minutes or seconds
  */
countDownClock(10.5, 'days');