$(document).ready(function(){
  if(!is_touch_device()){//Habilita o ease scroll apenas em telas não touch
    $("html").easeScroll();
  }
  else{
    $(".banner-parallax").addClass('touch');
  }
  function draw() {
    requestAnimationFrame(draw);
    scrollEvent();
  }
  draw();
});
function scrollEvent(){
  //if(!is_touch_device()){
    viewportTop = $(window).scrollTop();
    windowHeight = $(window).height();
    viewportBottom = windowHeight+viewportTop;
    if($(window).width())
      $('[prllx="true"]').each(function(){
        distance = viewportTop * $(this).attr('prllx-speed');
        if($(this).attr('prllx-up') === 'true'){ sym = '-'; } else { sym = ''; }
          $(this).css('transform','translate3d(0, ' + sym + distance +'px,0)');
        });
    //}
}   
function is_touch_device() {
  return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
}