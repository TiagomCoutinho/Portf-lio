/*
#  PRLLX v0.1 - Tiago Moreno Coutinho
#
#  Adaptacao do codico da Morris Digital
#  http://morris-digital.co.uk/blog/super-simple-60-fps-parallax
*/
$(document).ready(function(){
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
  return 'ontouchstart' in window
      || 'onmsgesturechange' in window; //IE10
}