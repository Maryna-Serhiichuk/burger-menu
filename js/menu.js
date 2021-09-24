$(document).ready(function(){
  $('.click').click(function(){
    $('.click, .burger__menu, .img__logo-max').toggleClass('active');
    $('.body').toggleClass('lock');
  })
})