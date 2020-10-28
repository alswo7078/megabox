$(function(){
  $('.skip_menu a').focus(function(){
    $('.skip_menu').addClass('active');
  })
  $('.skip_menu a').blur(function(){
    $('.skip_menu').removeClass('active');
  }) 
  $('#banner01_close').on('click',function(){
    $('.banner01').slideUp(200);
  })
})