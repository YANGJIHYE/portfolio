//contents2 banner-slide
var moving = $('.area>ul');
var timer;
var wid=moving.find('li').width();
 console.log(wid); //400

slide();
function slide(){
    timer = setInterval(function(){
        moving.animate({left:-440},6000, function(){
            $(this).find('li:first').insertAfter($(this).find('li:last'));
            $(this).css({left:0});
        });
    },2000);
};

$('.banner-slide').hover(function(){
    clearInterval(timer);
},function(){
    slide();
});

$('.right').click(function(){
    moving.animate({left:-440},2500, function(){
        $(this).find('li:first').insertAfter($(this).find('li:last'));
        $(this).css({left:0});
    });
});
$('.left').click(function(){
    moving.find('li:last').insertBefore(moving.find('li:first'));
    moving.css({left:-440}).stop().animate({left:0},2500);
});

//#section.noticepan_area(알림판)
$(function(){
    let move=$('#wrap ul');
    let liWidth=$('#wrap ul li').width();
    let arrowRight=$('.next');
    let arrowLeft=$('.prev');
    let timer;
    let current=0;
    let pager=$('.pager span');


    //console.log(liWidth)
    slide();
    function slide(){
        timer=setInterval(function(){
            move.animate({left:-liWidth},500,function(){
            move.children('li:first').insertAfter(move.children('li:last'))    
            })
        },2000);

    }

    $('.slide').hover(function(){
        clearInterval(timer)
    },function(){
        slide()
    });

    arrowRight.click(function(){
            move.stop().animate({left:-liWidth},500,function(){
            move.children('li:first').insertAfter(move.children('li:last')) 
            $(this).css({left:0});
        });    
    }); 
    arrowLeft.click(function(){
            move.stop().animate({left:-liWidth},500,function(){
            move.children('li:last').insertBefore(move.children('li:first')) 
            $(this).css({left:0});
        });
      
    });

});

//contents3 web-slide
$('.page_ico1').click(function (){
    $('div[class^="web"]').css({'display':'none','z-index':'1'});
    $('.web-slide1').css({'display':'block','z-index':'5'});
});

$('.page_ico2').click(function (){
    $('div[class^="web"]').css({'display':'none','z-index':'1'});
    $('.web-slide2').css({'display':'block','z-index':'5'});
});

$('.page_ico3').click(function (){
    $('div[class^="web"]').css({'display':'none','z-index':'1'});
    $('.web-slide3').css({'display':'block','z-index':'5'});
});

$('.page_ico4').click(function (){
    $('div[class^="web"]').css({'display':'none','z-index':'1'});
    $('.web-slide4').css({'display':'block','z-index':'5'});
});

$('.page_ico5').click(function (){
    $('div[class^="web"]').css({'display':'none','z-index':'1'});
    $('.web-slide5').css({'display':'block','z-index':'5'});
});

$('.page_ico6').click(function (){
    $('div[class^="web"]').css({'display':'none','z-index':'1'});
    $('.web-slide6').css({'display':'block','z-index':'5'});
});

$('.page_ico7').click(function (){
    $('div[class^="web"]').css({'display':'none','z-index':'1'});
    $('.web-slide7').css({'display':'block','z-index':'5'});
});

$('.contents3 .container ul li').click(function(){
    $('.contents3 .container ul li').css('border','none');
    $(this).css({'border':'solid #1e9e45'});
});

//footer-top sitelink
var linksite=true;
$('#footer .ft-top .inner ul li .sitelink').click(function(){

    if(linksite==true){
        $(this).find('.link').show();
        linksite=false;
    }else{
        $(this).find('.link').hide()
        linksite=true;
    }
    
});

//footer에서 상단으로 이동하기
var topEle = $('#topBtn');
var delay = 2000;
topEle.on('click', function(){
    $('html, body').stop().animate({scrollTop:0}, delay);
});