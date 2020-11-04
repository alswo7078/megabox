
$(function(){
  // ===스킵메뉴===
  var skip=$('.skip_menu a');
  var skipMenu=$('.skip_menu');

  skip.on({
    focus:function(){
      skipMenu.addClass('active');
    },
    blur:function(){
      skipMenu.removeClass('active');
    }
  });

  // ===팝업===
  $('#popup_close').on('click',function(){
    if($('#day3_close').is(':checked')){
      $.cookie('non_popup', 'yes', { expires: 3, path: '/' });
    }       
    $('.popup').hide();
  });

  if($.cookie('non_popup')=='yes'){
    $('.popup').hide();
  }else{
    $('.popup').show();
  };
  
  // vip클릭
  $('.vip_box').on('click',function(){
    confirm('로그인후 이용가능합니다. \n로그인 하시겠습니까?');
  });

  // 네비호출/닫기
  $('.burger_box').on('click',function(){
    $('nav').css('width',300);
    $('html,body').addClass('not_scroll');
    $('.before').show();
  });
  $('.nav_close').on('click',function(){
    $('nav').css('width',0);
    $('html,body').removeClass('not_scroll');
    $('.before').hide();
  });

  // 윈도우 스크롤 이벤트
  $(window).on('scroll',function(){
    var scrTop=$(window).scrollTop();
    var hrd=$('.header');
    if(scrTop>0){
      hrd.addClass('active');
    }else{
      hrd.removeClass('active');
    }
  });

  // 박스오피스 해시테크
  $('.swiper-container-has a').on('click',function(){
    $('.swiper-container-has a').removeClass('active');
    $(this).addClass('active');
  });

  $('.swiper-container-has li').on('click',function(){
    var hasIndex = $(this).index();
    var boxSwiper = $('.box_office .swiper-container');
    boxSwiper.removeClass('active');
    boxSwiper.eq(hasIndex).addClass('active');
  });

  // 이벤트 해시테크
  $('.swiper-container-has2 a').on('click',function(){
    $('.swiper-container-has2 a').removeClass('active');
    $(this).addClass('active');
    return false;
  });
  

  // 스와이퍼
  var swiper = new Swiper('.swiper-container',{
    spaceBetween:30,
    slidesPerView:'auto',
    speed:50,
    freeMode:true,
  });
  // 박스오피스
  var swiper1=new Swiper('.swiper-container-has',{        
    slidesPerView:'auto',
    speed:50,
    freeMode:true,
  });
  // 이벤트
  var swiper2=new Swiper('.swiper-container-has2',{        
    slidesPerView:'auto',
    speed:50,
    freeMode:true,
  });

  
  // 무비클립
  $('.play_btn').on('click',function(){
    $('.movie_clip').show();
    // document.getElementById('video01').play();
    $('#video01').get(0).play();
  });
  $('#close_clip').on('click',function(){
    $('.movie_clip').hide();
    // document.getElementById('video01').pause();
    $('#video01').get(0).pause();
  });

  var wrapBottomHeight = $('.wrap_bottom').height();
  $('footer').css('margin-bottom',wrapBottomHeight);

  $('.bottom_nav li').on('click',function(){
    $('.bottom_active').hide();
    $('.bottom_origin').show();
    $('.bottom_nav li .con_txt04').removeClass('active');
    $(this).children('a').children('.bottom_img').children('.bottom_active').show();
    $(this).children('a').children('.bottom_img').children('.bottom_origin').hide();
    $(this).children('a').children('.con_txt04').addClass('active');
    return false;        
  })

});