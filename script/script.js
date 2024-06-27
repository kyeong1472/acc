$(function(){

    //menu
    $(".main li").mouseover(function(){
        $(".sub, .bg").stop().slideDown(300);
    });
    $(".main li").mouseout(function(){
        $(".sub, .bg").stop().slideUp(300);
    });

    //slide
    $(".slide li").hide();
    $(".slide li").first().fadeIn("slow");
    setInterval(function(){
        $(".slide li").first().fadeOut("slow")
                        .next().fadeIn("slow")
                        .end().appendTo(".slide ul")
    },3000);

    //tab
    $(".tab_menu li").click(function(){
        let idx = $(this).index();
        $(".tab_menu li").removeClass("active");
        $(".tab_menu li").eq(idx).addClass("active");

        $(".tab_con ul").hide();
        $(".tab_con ul").eq(idx).show();
    });

    //c3_slide
    setInterval(function(){
        $(".c3_slide ul").animate({left:-100+"%"},1000,function(){
            $(".c3_slide li").eq(0).appendTo(".c3_slide ul")
            $(".c3_slide ul").css({left:0});
        });
    },4000);
    
});