$(document).ready(function(){
	$('.carregando').addClass('ok');
	$('.banner-parallax__titulo').addClass('ok');
	if(!is_touch_device()){
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