$(document).ready(function(){
	$('.carregando').addClass('ok');
	$('.banner-parallax__titulo').addClass('ok');
  $(".header-nav").click(function() {
    $('header').toggleClass('ativo');
  });
	if(!SeePrllxTouch()){
		$("html").easeScroll();//Habilita o ease scroll apenas em telas não touch
	}
});
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        window.location.hash = hash;
      });
    }
  });
});
var targetOffset = $("#anchor").offset().top;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset ) {   
      $('header').addClass('scroll');
    } else {
      $('header').removeClass('scroll');
    }
});