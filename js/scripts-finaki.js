$(document).ready(function(){
    var $win = $(window);
    var $body = $('body');

    var is = {
        Mobile  : false,
        Desktop : false,
        Tablet  : false
    };

    var get = {
        Scroll   : 0,
        WinWidth : 0
    };

    var sliderTimeoutDuration = 10000;
    var dotIndex;

    var $startFading = function(){
        $('.slider-main .slides .slide__inner').addClass('visible');

        setTimeout(function(){
            $('.slider-main .slides .slide__inner').removeClass('visible');
        }, sliderTimeoutDuration - 400);
    }

    if ($('.slider-main .slides').length) {
        $('.slider-main .slides').carouFredSel({
            width: '100%',
            items: 1,
            circular: true,
            infinite: true,
            responsive: true,
            swipe: true,
            onCreate: function(){
                var $this = $(this);

                setTimeout(function(){
                    var $paging = $this.closest('.slider').find('.slider__paging');
                    var dotsNumber = $paging.find('a').length;

                    $this.find('.slide').first().addClass('visible');
                    $paging.append('<div class="slider__paging-overlay"></div>');

                    // generate overlay dots
                    for (var i = 0; i < dotsNumber; i++) {
                        $paging.find('.slider__paging-overlay').append('<a href="#"></a>');
                    }

                    // slideTo
                    $('.slider-main .slider__paging-overlay a').click(function(e){
                        e.preventDefault();

                        var $dot = $(this);
                        $this.find('.visible').removeClass('visible');

                        setTimeout(function(){
                            dotIndex = $dot.index();

                            $this.trigger('slideTo', dotIndex); 
                        }, 400);
                    });
                },100);
            },
            scroll: {
                onAfter: function() {
                    $(this).find('.slide').first().addClass('visible');
                }
            },
            auto: {
                play: false,
                duration: 1000,
                timeoutDuration: sliderTimeoutDuration
            },
            pagination: {
                container: '.slider-main .slider__paging'
            }
        });
    }


    if ($('.front .contacts-list').length) {
        $('.contacts-list').append('<div class="slider-paging"></div>');
    }

    $win.on('load resize orientationchange', function(){
        if (is.Desktop) {
            if ($('.front .contacts-list .cl-content').length) {
                $('.front .contacts-list .cl-content').carouFredSel({
                    width: '80%',
                    items: {
                        visible: 3
                    },
                    scroll: 1,
                    circular: true,
                    infinite: true,
                    responsive: true,
                    swipe: true,
                    auto: {
                        items: 1,
                        play: true,
                        duration: 1250,
                        timeoutDuration: 2000
                    },
                    pagination: '.slider-paging'
                });
            }
        } else if (is.SmallDesktop) {
            if ($('.front .contacts-list .cl-content').length) {
                $('.front .contacts-list .cl-content').carouFredSel({
                    width: '100%',
                    items: 3,
                    scroll: 1,
                    circular: true,
                    infinite: true,
                    responsive: true,
                    swipe: true,
                    auto: {
                        items: 1,
                        play: true,
                        duration: 1250,
                        timeoutDuration: 2000
                    },
                    pagination: '.slider-paging'
                });
            }
        } else if (is.Tablet) {
            if ($('.front .contacts-list .cl-content').length) {
                $('.front .contacts-list .cl-content').carouFredSel({
                    width: '100%',
                    items: 2,
                    scroll: 1,
                    circular: true,
                    infinite: true,
                    responsive: true,
                    swipe: true,
                    auto: {
                        items: 1,
                        play: true,
                        duration: 1250,
                        timeoutDuration: 2000
                    },
                    pagination: '.slider-paging'
                });
            }
        } else if (is.Mobile) {
            if ($('.front .contacts-list .cl-content').length) {
                $('.front .contacts-list .cl-content').carouFredSel({
                    width: '100%',
                    items: 1,
                    scroll: 1,
                    circular: true,
                    infinite: true,
                    responsive: true,
                    swipe: true,
                    auto: {
                        items: 1,
                        play: true,
                        duration: 1250,
                        timeoutDuration: 2000
                    },
                    pagination: '.slider-paging'
                });
            }
        } else {
            if ($('.front .contacts-list .cl-content').length) {
                $('.front .contacts-list .cl-content').carouFredSel({
                    width: '80%',
                    items: {
                        visible: 3
                    },
                    scroll: 1,
                    circular: true,
                    infinite: true,
                    responsive: true,
                    swipe: true,
                    auto: {
                        items: 1,
                        play: true,
                        duration: 1250,
                        timeoutDuration: 2000
                    },
                    pagination: '.slider-paging'
                });
            }
        }

        $('.front .contacts-list .caroufredsel_wrapper').each(function(){
            var $this = $('.front .contacts-list .caroufredsel_wrapper');
            var height = $this.find('.cl-content').height();
            
            setTimeout(function(){
                $this.css('height', height);
            }, 20);
        });
    });

    if ($('.slider-hotel .slides').length) {
        $('.slider-hotel .slides').carouFredSel({
            width: '100%',
            items: 1,
            circular: true,
            infinite: true,
            responsive: true,
            swipe: true,
            auto: {
                play: true,
                duration: 1000,
                timeoutDuration: 5000
            },
            pagination: {
                container: '.slider-hotel .slider__paging'
            }
        });
    }

    $('.article-title img').wrap('<div class="article-image">');

    function magnificPopup() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    $('.profile').on('click touchstart', function(){
    });

    function tabs() {
        $('.tabs__nav li a').click(function(e){
            e.preventDefault();

            var $this = $(this);
            var targetID = $($this.data('target'));

            $this.closest('ul').find('.active').removeClass('active');
            $this.addClass('active');

            $(targetID).addClass('active').siblings().removeClass('active');

            if (is.Mobile) {
                var target = $this.data('target');
                var _offset = $(target).offset().top - $('.site-banner').height();

                if ($(target).length === 0) {
                    return;
                }

                event.preventDefault();

                _offset = _offset - $('.header').height();
                $('body, html').animate({scrollTop: _offset});
            }
        });
    }

    function accordion() {
        $('.accordion .accordion__head').click(function(e){
            e.preventDefault();
            var $this = $(this);

            $this.closest('.accordion__section').toggleClass('expanded').find('.accordion__body').stop(true, false).slideToggle();
        });
    }

    function mobileHeader() {
        if (is.Tablet || is.Mobile) {
            if (!$('.header-mobile').length) {
                $('.site-banner .main-navigation, .site-banner .socials, .site-banner .lang-switcher').wrapAll('<div class="header-mobile"><div class="header-mobile-inner"><div class="header-mobile-content">');
            }
        } else {
            if ($('.header-mobile').length) {
                $('.site-banner .main-navigation, .site-banner .socials, .site-banner .lang-switcher').unwrap().unwrap().unwrap();
            }
        }
    }

    function addBaseClickEvents() {
        $('.btn-menu').click(function(e){
            e.preventDefault();

            $body.toggleClass('show-nav-main');
        }); 
    }

    function addDeviceResolution() {
        get.WinWidth = $win.width();

        is.Desktop = (get.WinWidth > 1200); 
        is.SmallDesktop = (get.WinWidth <= 1200 && get.WinWidth >= 1025);
        is.Tablet  = (get.WinWidth <= 1024 && get.WinWidth >= 768);
        is.Mobile  = (get.WinWidth <= 767);
    }

    $win.on('load', function(){
        AOS.refresh();
        mobileHeader();
        tabs();
        accordion();
    });

    $win.on('resize orientationchange', function(){
        addDeviceResolution();
        mobileHeader();
    });
    
    AOS.init({
        offset: $win.height() / 4,
        duration: 800
    });

    mobileHeader();
    magnificPopup();
    addDeviceResolution();
    addBaseClickEvents();
});
