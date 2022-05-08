/* 공통속성 section 세로스크롤 */
$(function(){
    let wheelDelta=0;//휠이벤트 발생하면 반환값을 확인하기 위한 변수
    let browser=0;//파이어폭스 브라우저 판별하기 위한 변수

    //섹션9개 배열처리
    // -마우스를 한번 내릴때 아래로(-120)의 값을 가진다.    
    //다음섹션으로 넘어가게 하기
    // -마우스를 한번 올릴 때 위로(120)의 값을 가진다.    
    //이전섹션으로 넘어가게 하기
    //mousewheel=크롬, 익스, 사파리, 오페라..
    //파이어폭스 DOMMouseScroll
    //파이어 폭스 브라우저 판별하는 것은 = window.navigator.userAgent

    $('.section').each(function(index){
        $(this).on('mousewheel DOMMouseScroll', function(e){
            e.preventDefault();
            browser=window.navigator.userAgent.toLowerCase().indexOf('firefox')
            //브라우저가 firefox이면 몇번째 있는지를 나타냄 -1을 가지면 firefox글자가 없는것임
            if(browser>=0){//0보다 크다는 이야기는 firefox를 가지고 있음
                wheelDelta=-e.detail*40;
                //console.log(wheelDelta)
            }else{
                wheelDelta=e.originalEvent.wheelDelta;
               // console.log(wheelDelta)
            }
            if(wheelDelta<0){
                if(index < $('.section').length-1){
                    $('html, body').stop().animate({scrollTop:$(this).next().offset().top},500);
                }
            }else{
                if(index > 0){
                    $('html, body').stop().animate({scrollTop:$(this).prev().offset().top},500);
                }
            }

        })
    });
    

});

/*section1 home text */
$(function(){
    let textTarget=$('.left1_text');
    let text="안녕하세요 웹퍼블리셔에 지원하는 양지혜입니다 : )";
    let i=0;
    let typing = setInterval(function(){
        i++;
        if(i>text.length+1) {clearInterval(typing); return;}
        let h4TextSlice = text.slice(0, i);
        textTarget.text(h4TextSlice);
    },100)
})
$('.blink').each(function() {
    var ele = $(this);
    setInterval(function() {
        if (ele.css('visibility') == 'hidden') {
            ele.css('visibility', 'visible');
        } else {
            ele.css('visibility', 'hidden');
        }   
    }, 500);
});


/* section2 about text_line */
$(function(){
    let slideText=$('.about_top>.left>.text_line>.left_text>li');
    let i=0;
    
    setInterval(function(){  
        slideText.eq(i).animate({top:'-100%',opacity:0});
        i++;
        if(i==2){i=0};
        slideText.eq(i-1).animate({top:'100%'});
        slideText.eq(i).animate({top:'0%',opacity:1});
    },3000)
})


//if(browser>=0 0보다 크니? 이 의미는 있단이야기다! 없으면 -1값
//indexOf(몇번째에 파이어폭스가 있는지찾을것이고 없으면 -1값을 가진다)
//toLowerCase 뭐가있는지 찾아와

let sect1Top=$('#section1').offset().top;
let sect2Top=$('#section2').offset().top;
let sect3Top=$('#section3').offset().top;
let sect4Top=$('#section4').offset().top;

/* section btn, header menu section2-3 background #fff 변경 */
(function($){
    let wrap = {
        init: function(){
            this.header();
        },
        header: function(){
            const btn =$('#pagebtn>ul>li');
            const menu =$('.menu>ul>li');
            const contents= $('.section > div');

            menu.on({click:function(e){
                e.preventDefault();
                let tg=$(this);
                let i=tg.index();
                let section=contents.eq(i);
                let st=section.offset().top;
                $('html, body').stop().animate({scrollTop:st});
                btn.removeClass('active');
                btn.eq(i).addClass('active')
            }});

            $('#btn01').click(function(){
                $('html, body').animate({scrollTop: sect1Top},300);
                $('#pagebtn ul li').removeClass('active')
                $(this).parents('li').addClass('active')
            });
            $('#btn02').click(function(){
                $('html, body').animate({scrollTop:sect2Top},300);
                $('#pagebtn ul li').removeClass('active')
                $(this).parents('li').addClass('active')
            });
            $('#btn03').click(function(){
                $('html, body').animate({scrollTop:sect3Top},300);
                $('#pagebtn ul li').removeClass('active')
                $(this).parents('li').addClass('active')
            });
            $('#btn04').click(function(){
                $('html, body').animate({scrollTop:sect4Top},300);
                $('#pagebtn ul li').removeClass('active')
                $(this).parents('li').addClass('active')
            });


            btn.hide()
            $(window).scroll(function(){
                let headerMenu=$('.header_menu>ul>li');
                btn.show()
                let sct=$(window).scrollTop();
                //console.log(sct)
               if(sct==sect1Top){
                btn.css('display','none');
                btn.removeClass('active')  
                btn.eq(0).addClass('active')
                headerMenu.find('a').removeClass('active');
                $('#header').css({background:'#F5F5F5'});
               }
               if(sct==sect2Top){
                btn.removeClass('active')  
                btn.eq(1).addClass('active')
                headerMenu.find('a').removeClass('active');
                headerMenu.eq(1).find('a').addClass('active');
                $('#header').css({background:'#FFF'});
               }
               if(sct==sect3Top){
                btn.removeClass('active')  
                btn.eq(2).addClass('active')
                headerMenu.find('a').removeClass('active');
                headerMenu.eq(2).find('a').addClass('active');
                $('#header').css({background:'#FFF'});
               }
               if(sct==sect4Top){
                btn.removeClass('active')  
                btn.eq(3).addClass('active')
                headerMenu.find('a').removeClass('active');
                headerMenu.eq(3).find('a').addClass('active');
                $('#header').css({background:'#F5F5F5'});
               }
            });
        }
    };
    wrap.init();
})(jQuery);

/* section3 slide */
$(function(){
    let banner=$('.p_inner_wrap>.p_inner');
    let prevBtn=$('.arrow_prev');
    let nextBtn=$('.arrow_next');
    let timer;
    let cnt=0;

    slide();//호이스팅
    function slide(){
        timer=setInterval(function(){ //setInterval일정한 시간간격으로 작업을 실행
            let prev=banner.eq(cnt);
            move(prev, 0, '-100%');
            cnt++;
            if(cnt==banner.size()) cnt=0;
            let next=banner.eq(cnt);
            move(next, '100%', '0')
        },3000);
    }

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},500);
    }

    $('.p_btn').hover(function(){
        clearInterval(timer) //setInterval을 제어하는 //timer는 참조변수
    },function(){
        slide()
    });

    nextBtn.click(function(){
         let prev=banner.eq(cnt);
            move(prev, 0, '-100%');
            cnt++;
            if(cnt==banner.size()) cnt=0;
            let next=banner.eq(cnt);
            move(next, '100%', '0')
    });
    prevBtn.click(function(){
        let prev=banner.eq(cnt);
        move(prev, 0, '100%');
        cnt--;
        if(cnt==-banner.size()) cnt=0;
        let next=banner.eq(cnt);
        move(next, '-100%', '0')
    });

});

/*section2,4번 addParallax 스크롤이벤트 */
(function($){
    var Agency = {
        init: function(){
           this.parallax(); 
        },
        parallax: function(){
            const scrollEvent={
                init:function(){
                    this.section2();
                    this.section4();
                },
                section2:function(){
                    const titleTop=$('#section2 .about_bottom .skills .title').offset().top;
                    //console.log(titleTop)
                    let winH=$(window).height();
                    let titTop=titleTop-winH;
                    //console.log(titTop)
        
                    $(window).scroll(function(){
                        if($(window).scrollTop() > titTop){//스크롤탑의 위치값이 130보다 크면
                            $('#section2').addClass('addParallax');
                        }
                        if($(window).scrollTop() == 0){//맨위가 되면 추가된 클래스 삭제
                            $('#section2').removeClass('addParallax');
                        }
                    });
                },
                section4:function(){
                    //console.log('rerd');
                },
                section4:function(){
                    const section4=$('#section4');
                    const titleTop=$('#section4 .link').offset().top;
                    //console.log(titleTop)
                    let winH=$(window).height();
                    //console.log(winH)
                    let titTop= titleTop-winH;

                    $(window).scroll(function(){
                        if($(window).scrollTop() > titTop){
                            section4.addClass('addParallax');
                        }
                        if($(window).scrollTop() == 0){
                            section4.removeClass('addParallax');
                        }
                    });

                },
            }
            scrollEvent.init();
        }
    }
    Agency.init();
})(jQuery);

const button=()=> {
    const nav = document.querySelector('.nav');
    nav.addEventListener('click', () => {
        nav.classList.toggle('toggle');
    });
}

button();

$('.header_menu>.nav').click(function(){
    $('.menu').toggle();
})

