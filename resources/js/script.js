$(document).ready(function() {
    // For the sticky navigation
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    // Scroll on buttons
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    // Navigation scroll
    function filterPath(string) {
        return string
            .replace(/^\//, '')
            .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
            .replace(/\/$/, '');
    }
      
    var locationPath = filterPath(location.pathname);
    $('a[href*="#"]').each(function () {
        var thisPath = filterPath(this.pathname) || locationPath;
        var hash = this.hash;
        if ($("#" + hash.replace(/#/, '')).length) {
            if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
                var $target = $(hash), target = this.hash;
                if (target) {
                    $(this).click(function(event) {
                        if ($('#animation').prop('checked')) {
                            event.preventDefault();
                            $('html, body').animate({scrollTop: $target.offset().top}, 1000, function() {
                                location.hash = target;
                                $target.focus();
                                if ($target.is(":focus")) {  //checking if the target was focused
                                    return !1;
                                } else {
                                $target.attr('tabindex', '-1');  //Adding tabindex for elements not focusable
                                $target.focus()  //Setting focus
                                }
                            })
                        }
                    });
                }
            }
        }
    });

    // Animations on scroll
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn')
    }, {
        offset:'50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__slideInUp')
    }, {
        offset:'50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn')
    }, {
        offset:'50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse')
    }, {
        offset:'50%'
    });

    // Mobile navigation
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon')
        nav.slideToggle(200)
            // if (icon.hasClass('menu')) {
            //     icon.addClass('close')
            //     icon.removeClass('menu')
            // } else {
            //     icon.addClass('menu')
            //     icon.removeClass('close')
            // }
            if (icon.hasName('menu')) {
                icon.addName('close')
                icon.removeName('menu')
            } else {
                icon.addName('menu')
                icon.removeName('close')
            }

    });

    // var motionQuery = matchMedia('(prefers-reduced-motion)');
    // function handleReduceMotionChanged() {
    // if (motionQuery.matches) {  // adjust motion of 'transition' or 'animation' properties 
    // } else { 
    //     // standard motion 
    // }
    // }
    // motionQuery.addListener(handleReduceMotionChanged);
    // handleReduceMotionChanged(); // trigger once on load if needed

});