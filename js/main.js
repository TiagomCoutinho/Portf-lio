$(document).ready(function(){
  if(!is_touch_device()){
    $("html").easeScroll();//Habilita o ease scroll apenas em telas não touch
  }
  else{
    $(".banner-parallax").addClass('touch');
  }
});