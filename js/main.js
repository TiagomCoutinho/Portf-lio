$(document).ready(function(){
	$('.carregando').addClass('ok');
	$('.banner-parallax__titulo').addClass('ok');
  $(".header-nav").click(function() {
    $('header').toggleClass('ativo');
  });
  $(".header-link").click(function(){
    $('header').toggleClass('ativo');
  });
	if(!SeePrllxTouch()){
		$("html").easeScroll();//Habilita o ease scroll apenas em telas não touch
	}
  $(window).scroll( function(){
    $('.show-me').each( function(i){      
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){        
        $(this).addClass('isee');              
      }        
    });   
  });
});
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    }
  });
});
var targetOffset = $("#sobre").offset().top - $(".ver-mais__titulo").offset().top;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset ) {   
      $('header').addClass('scroll');
    } else {
      $('header').removeClass('scroll');
    }
});