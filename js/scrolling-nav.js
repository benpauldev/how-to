//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

function TableHeight() { 
 if( typeof( window.innerWidth ) == 'number' ) { 
   //Non-IE 
   myWidth = window.innerWidth; 
   myHeight = window.innerHeight; 
 } else if( document.documentElement && 
     ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) { 
   //IE 6+ in 'standards compliant mode' 
   myWidth = document.documentElement.clientWidth; 
   myHeight = document.documentElement.clientHeight; 
 } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) { 
   //IE 4 compatible 
   myWidth = document.body.clientWidth; 
   myHeight = document.body.clientHeight; 
 } 

  document.getElementById('ctl00_divContent').style.height= (myHeight-170)+'px';
}