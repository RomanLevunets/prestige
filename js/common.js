$(document).ready(function() {

    //main-item height
    function item(){
        $('.main-item').each(function () {
            var ths = $(this),
                thsh = ths.find('.main-item').outerHeight();
                ths.find('.main-item').css('min-height', thsh);
        });
    }item();




        if(document.documentElement.clientWidth < 1080) {
            $('.location-content').hide();

            $('.location-adress-br').click(function(){
                var element = $(this).next();
                element.slideToggle('slow');
                $('.location-content:visible').not(element).slideUp('slow');

            });
            $('.location-adress').click(function() {
                if (!$(this).hasClass('active')) {
                    $('.location-adress').removeClass('active');
                    $(this).addClass('active');
                }
            });

        }

    $('.burger').click(function(){
        $('.burger__line').toggleClass('active-b');
        $('.sidebar').toggleClass('open');

    });

});

