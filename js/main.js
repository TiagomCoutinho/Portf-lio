/*$( document ).ready(function() {
    $( ".carregando" ).toggleClass('ok');
    //$("html").easeScroll();
    $(window).scroll(function() {
      var l1 = $(window).scrollTop();
      $('#l1').css('transform',("translateY(" + l1 / 11.4 + 'px)'));
      var l2 = $(window).scrollTop();
      $('#l2').css('transform',("translateY(" + l1 / 11.25 + 'px)'));
      var l3 = $(window).scrollTop();
      $('#l3').css('transform',("translateY(" + l1 / 3.15 + 'px)'));
      var l4 = $(window).scrollTop();
      $('#l4').css('transform',("translateY(" + l1 / 2.15 + 'px)'));
      var l5 = $(window).scrollTop();
      $('#l5').css('transform',("translateY(" + l1 / 1.75 + 'px)'));
      var l6 = $(window).scrollTop();
      $('#l6').css('transform',("translateY(" + l1 / 1.25 + 'px)'));
    });
}); */
$(document).ready(function(){
  $("html").easeScroll();
  function draw() {
    requestAnimationFrame(draw);
    scrollEvent();
  }
  draw();
});
function scrollEvent(){
  if(!is_touch_device()){
    viewportTop = $(window).scrollTop();
    windowHeight = $(window).height();
    viewportBottom = windowHeight+viewportTop;
    if($(window).width())
      $('[data-parallax="true"]').each(function(){
        distance = viewportTop * $(this).attr('data-speed');
        if($(this).attr('data-direction') === 'up'){ sym = '-'; } else { sym = ''; }
          $(this).css('transform','translate3d(0, ' + sym + distance +'px,0)');
        });
    }
}   
function is_touch_device() {
  return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
}