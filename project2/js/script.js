//banner slide
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   navigation: {
     nextEl: ".bannerRightBtn",
     prevEl: ".bannerLeftBtn",
   },
   centeredSlides: true,
    preventClicks:true,
    on: {
      slideChange: function () {
        $('.swiper-slide').removeClass('img');
        $('.swiper-slide').eq(this.activeIndex).addClass('img');
      }
    },
 });

//news swiper
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper1-pagination1",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup : 1,
  pagination: {
    el: ".swiper1-pagination2",
    clickable: true,
  },
});


//brand_social slide 
$(function(){
  const galleryWrap=$('.brand_social> ul')
  let offset = galleryWrap.offset().left; 
  galleryWrap.on({
    mousemove(e){
      $(this).css({left: -e.pageX + offset   });
    }
});
});

//footer site link
var linksite=true;
$('#site_footer .footer-top .sitemap .sitelink-wrap li .sitelink').click(function (){

    if(linksite==true){
        $(this).find('.link').show();
        $('.sitelink-wrap>li').css({border:'1px solid #ebebeb',borderTop:'none'})
        $('.sitelink-wrap>li').addClass('add')
        linksite=false;
    }else{
        $(this).find('.link').hide();
        $('.sitelink-wrap>li').css({border: 'none'})
        $('.sitelink-wrap>li').removeClass('add')
        linksite=true;
    }
    
});

//media screen max-width: 1024 menu open 
$('#nav-1024-open').click(function(){
  var checked = $(this).is(':checked');
  
  if(checked) $('.nav1024-bg').show(400)
  else $('.nav1024-bg').hide(400);
});

$('.nav1024-close').click(function(){
  let click=true;
  if (click){
    $('.nav1024-bg').hide(400);
    click=false;
  }else{
    $('.nav1024-bg').show(400);
    click=ture;
  }
})

