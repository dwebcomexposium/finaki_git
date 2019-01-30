(function($) {

    var simaJS = {

        init : function(){

            this.popin();
            this.addLang();
            this.animateFigures();

        },
        

        popin : function(){
            $(".video-item").click(function(){
                var videoName = $(this).data('videoname');
                $("#"+videoName).addClass('popin-open');
                $("html").addClass('noscroll');
            });
            $(".popin-close, .popin-overlay").click(function(){
                var videoName = $(this).data('videoname');
                $(".popin").removeClass('popin-open');
                $("#"+ videoName +' iframe').attr("src", $("#"+ videoName +' iframe').attr("src"));
                $("html").removeClass('noscroll');
            });
        },

        addLang : function() {
            if ( $('html').attr('lang') == 'en' ) {
                $(".js .ls-lang-list").append('<li class="ls-lang-item ls-lang-es"><a class="ls-lang-link" href="/Visit/Visitar-SIMA"><abbr title="Español">es</abbr></a></li> <li class="ls-lang-item ls-lang-it"><a class="ls-lang-link" href="/Visit/Visitare-SIMA"><abbr title="Italiano">it</abbr></a></li> <li class="ls-lang-item ls-lang-de"><a class="ls-lang-link" href="/Visit/Die-SIMA-besuchen"><abbr title="Deutsch">de</abbr></a></li>');
            } else {
                $(".js .ls-lang-list").append('<li class="ls-lang-item ls-lang-es"><a class="ls-lang-link" href="/Visiter/Visitar-SIMA"><abbr title="Español">es</abbr></a></li> <li class="ls-lang-item ls-lang-it"><a class="ls-lang-link" href="/Visiter/Visitare-SIMA"><abbr title="Italiano">it</abbr></a></li> <li class="ls-lang-item ls-lang-de"><a class="ls-lang-link" href="/Visiter/Die-SIMA-besuchen"><abbr title="Deutsch">de</abbr></a></li>');
            }
        },
        
        animateFigures : function() {
            
            /*
            jQuery animateNumber plugin v0.0.14
            (c) 2013, Alexandr Borisov.
            https://github.com/aishek/jquery-animateNumber
           */
           (function(d){var r=function(b){return b.split("").reverse().join("")},m={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},g=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=m.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:g}:d.fx.step.number=g;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var f=Math.floor(a);d(e.elem).prop("number",a).text(f+b)}},separator:function(b,a,e){b=b||" ";
           a=a||3;e=e||"";return function(f,k){var u=0>f,c=Math.floor((u?-1:1)*f).toString(),n=d(k.elem);if(c.length>a){for(var h=c,l=a,m=h.split("").reverse(),c=[],p,s,q,t=0,g=Math.ceil(h.length/l);t<g;t++){p="";for(q=0;q<l;q++){s=t*l+q;if(s===h.length)break;p+=m[s]}c.push(p)}h=c.length-1;l=r(c[h]);c[h]=r(parseInt(l,10).toString());c=c.join(b);c=r(c)}n.prop("number",f).text((u?"-":"")+c+e)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},m,b),e=d(this),f=[a],k=1,g=arguments.length;k<g;k++)f.push(arguments[k]);
           if(b.numberStep){var c=this.each(function(){this._animateNumberSetter=b.numberStep}),n=a.complete;a.complete=function(){c.each(function(){delete this._animateNumberSetter});n&&n.apply(this,arguments)}}return e.animate.apply(e,f)}})(jQuery);


            //Animate key figures

            var $window = $(window);
            var $elem = $(".chiffres-cles")

            function isScrolledIntoView($elem, $window) {
                var docViewTop = $window.scrollTop();
                var docViewBottom = docViewTop + $window.height();

                var elemTop = $elem.offset().top;
                var elemBottom = elemTop + $elem.height();

                return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
            }

            $(document).on("scroll", function () {
                if ($elem.length > 0) {
                    if (isScrolledIntoView($elem, $window)) {
                        console.log("now you see me");

                        //Animate visite number
                        $('#figure-visit').animateNumber({ number: 23, easing: 'easeOutQuart' }, 2000);

                        //Animate enterprise number
                        $('#figure-enterprise').animateNumber({ number: 1770, easing: 'easeOutQuart' }, 2000);

                        //Animate europe number
                        $('#figure-europe').animateNumber({ number: 200, easing: 'easeOutQuart' }, 2000);

                        //Animate press number
                        $('#figure-press').animateNumber({ number: 600, easing: 'easeOutQuart' }, 2000);

                        //Animate continent number
                        $('#figure-continent').animateNumber({ number: 5, easing: 'easeOutQuart' }, 2000);

                        //Animate pro number
                        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ')
                        $('#figure-pro').animateNumber(
                        {
                            number: 232000,
                            easing: 'easeOutQuart',
                            numberStep: comma_separator_number_step
                        } , 2000
                        );

                        $(document).off('scroll');


                    }
                }
            });

        }

    }
    simaJS.init();

})(jQuery);
