jQuery(function($){
    //reset scroll value
    $.scrollTo(0);

    $('#about-link').click(function(){$.scrollTo($('#about'), 500);});
    $('#gallery-link').click(function(){$.scrollTo($('#gallery'), 650);});  
    $('#services-link').click(function(){$.scrollTo($('#services'), 800);});
    $('#contact-link').click(function(){$.scrollTo($('#contact'), 950);});

    $('.go-up').click(function(){$.scrollTo($('body'), 900);});
    $('.start').click(function(){$.scrollTo($('body'), 900);});
}
);

$(window).scroll(function(){
    if($(this).scrollTop()>=700){
        $('.go-up').fadeIn();
    } 
    else{
        $('.go-up').fadeOut();
    } 
});