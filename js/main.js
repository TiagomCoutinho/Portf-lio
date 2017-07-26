$(document).ready(function(){
	$('.carregando').addClass('ok');
	$('.banner-parallax__titulo').addClass('ok');
	if(!is_touch_device()){
		$("html").easeScroll();//Habilita o ease scroll apenas em telas não touch
	}
});