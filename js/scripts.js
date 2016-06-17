function isMobile() {
    return (/Android|iPhone|iPad|iPod|Blackberry/i).text(navigator.userAgent || navigator.vendor || window.opera);
}

if (!isMobile()) {
    jQuery(document).ready(function ($) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop(), slowScroll = scroll / 3;
            var headerheight = $('section').height();
            $('section').css({ transform: "translateY(" + slowScroll + "px)" });
            $('section .container').css({ opacity: Math.min(1, 1.2 - scroll / headerheight) });
        });
    });
}