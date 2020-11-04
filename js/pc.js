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

   
  // ===pc팝업===
  $('#popup_close').on('click',function(){
    if($('#day3_close').is(':checked')){
      $.cookie('pc_non_popup', 'yes', { expires: 3, path: '/' });
    }       
    $('.pc_popup').hide();
  });

  if($.cookie('pc_non_popup')=='yes'){
    $('.pc_popup').hide();
  }else{
    $('.pc_popup').show();
  };

  // 배너닫기
  $('#banner01_close').on('click',function(){
    $('.banner01').slideUp(200);
  })

  // 박스오피스 슬라이더
  var swiper01=new Swiper('.swiper-container01',{
    slidesPerView:'auto',
    spaceBetween:32,
  });
  var swiper02=new Swiper('.swiper-container02',{
    speed:300,
    autoplay:{
      delay:1000,
    },
    direction: 'vertical',
  });

  var swiper03=new Swiper('.swiper-container03',{
    speed:300,
    autoplay:{
      delay:1000,
    },
    direction:'horizontal',
  });

  $('.prev_btn').on('click',function(){
    swiper02.slidePrev(500);
    swiper03.slidePrev(500);
  })
    
  $('.next_btn').on('click',function(){
    swiper02.slideNext(500);
    swiper03.slideNext(500);
    
  })

  swiper02.autoplay.stop();
  swiper03.autoplay.stop();
  $('.page>span').text(1);

  swiper02.on('slideChange', function () {
    var acIdx=swiper02.activeIndex;
    $('.nav_bar .sliding_box').css('margin-left',acIdx*30);
    document.querySelector('.page>span').innerText=acIdx+1;
  });

  $('.play_btn').on('click',function(){
    $('.stop_btn').removeClass('hide');
    $(this).addClass('hide');
    swiper02.autoplay.start();
    swiper03.autoplay.start();
  })
  $('.stop_btn').on('click',function(){
    $('.play_btn').removeClass('hide');
    $(this).addClass('hide');
    swiper02.autoplay.stop();
    swiper03.autoplay.stop();
  })
})