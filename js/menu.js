$(document).ready(function(){
  $('.click').click(function(){
    $('.click, .burger__menu, .img__logo-max').toggleClass('active');
    $('.body').toggleClass('lock');
  })
  $('.img__logo-max').click(function(){
    $('.info, .project').toggleClass('show');
  })
})