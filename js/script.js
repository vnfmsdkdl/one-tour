// console.log('hello')


// nav open
$(function(){
  $('.menu .gnb').mouseenter(function(){
    $(this).find('.lnb')
           .fadeIn(300);
  });

  $('.menu .gnb').mouseleave(function(){
    $(this).find('.lnb')
           .fadeOut(300);
  });
});

// scroll fixed menu
$( document ).ready( function() {
        var jbOffset = $( '.menu' ).offset();
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > jbOffset.top ) {
            $( '.menu' ).addClass( 'menuFixed' );
          }
          else {
            $( '.menu' ).removeClass( 'menuFixed' );
          }
        });
      } );
//스크롤 시 header 색 변경
      $(function(){
         shows();
         $(window).resize(function(){
            shows();
         });
      });
      function shows(){
         var win_h = $(window).height();
         if(win_h < 1500){
            $(window).on('scroll', function(event){
               var y=$(this).scrollTop();
               if( y > 5){
                 $('nav').css('background','white');
                 } else {
                 $('nav').css('background','white');
               }
            });
         } else {$(window).off('scroll');}
      }

//bxslider
$(function(){
  $('.main_bxslider').bxSlider({
    auto: true,
    mode: 'fade',//효과
    captions: false,//캡션 사용유무(true/false)
    pause: 5000
  });
});

//tab
$(function() {
			$('.search_section > ul.tabs li').click(function() {
				var activeTab = $(this).attr('data-tab');
				$('.search_section > ul.tabs li')
          .removeClass('current')
          .css('background','white')
          .css('color','#3f51b5');
				$('.tab_content').removeClass('current');
				$(this)
          .addClass('current')
          .css('background','#3f51b5')
          .css('color','white');
				$('#' + activeTab).addClass('current');
			});
		});


    $(function() {
    			$('.special_offers > ul.tabs li').click(function() {
    				var activeTab = $(this).attr('data-tabs');
    				$('.special_offers > ul.tabs li')
              .removeClass('currents')
              .css('color','#333')
              .css('border-bottom','none');
    				$('.tab_contents').removeClass('currents');
    				$(this)
              .addClass('currents')
              .css('color','#3f51b5')
              .css('border-bottom','3px solid #3f51b5')
              .css('transition','0.2s');
    				$('#' + activeTab).addClass('currents');
    			});
    		});


//searchclear
var $ipt = $('#searchinput'),
    $clearIpt = $('#searchclear');

$ipt.keyup(function(){
  $("#searchclear").toggle(Boolean($(this).val()));
});

$clearIpt.toggle(Boolean($ipt.val()));
$clearIpt.click(function(){
  $("#searchinput").val('').focus();
  $(this).hide();
});

//datepicker
$(document).ready(function(){
     $( "#sdate,#edate" ).datepicker({
          showMonthAfterYear: true,
          monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
          dayNamesMin: ['일','월', '화', '수', '목', '금', '토'],
          dateFormat:'yy-mm-dd',
          yearSuffix: '년'
      });
});

//왕복 편도
$(function() {
  $('.airTop > form:nth-child(6) > label:last-child').click(function() {
    $('.airTop > form:nth-child(4)').addClass('on')
  });
  $('.airTop > form:nth-child(6) > label:first-child').click(function () {
    $('.airTop > form:nth-child(4)').removeClass('on')
  })
});

// best cover hover
$(function() {
  $('.best_city > ul > li').mouseenter(function () {
    $(this).find('.cover')
    .css('background','linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0, 0, 0, 1) 70%)')
  });
  $('.best_city > ul > li').mouseleave(function () {
    $(this).find('.cover')
    .css('background','linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,.5) 100%)')
  });
});

//다중이미지 bxSlider
$('.bxslider').bxSlider({
  auto: true,
  pager: false,
  minSlides: 3,
  maxSlides: 3,
  moveSlides:1,
  slideWidth: 336,
  slideMargin: 40,
  autoHover: true,
  prevSelector: '#slider-prev',
  nextSelector: '#slider-next',
  prevText: '<i class="fas fa-chevron-left"></i>',
  nextText: '<i class="fas fa-chevron-right"></i>'
});
