//楼层滚动事件
$(".subFloor").on("click",function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$(window).scroll(function(){
    if($(document).scrollTop()>innerHeight/2){
        $(".fixFloor").show();
    }
    else{
        $(".fixFloor").hide();
    }

    var sTop = $(window).scrollTop() + 300;
    var floor1 = $("#cptj").offset().top;
    var floor2 = $("#bz").offset().top;
    var floor3 = $("#jz").offset().top;
    var floor4 = $("#sn").offset().top;
    var floor5 = $("#byrz").offset().top;
    var floor6 = $("#js").offset().top;
    var floor7 = $("#cw").offset().top;

    if(sTop > floor1){
        $(".subFloor").eq(0).delay(300).addClass("active").siblings("li").removeClass("active");
    }
    if(sTop > floor2){
        $(".subFloor").eq(1).delay(300).addClass("active").siblings("li").removeClass("active");
    }
    if(sTop > floor3){
        $(".subFloor").eq(2).delay(300).addClass("active").siblings("li").removeClass("active");
    }
    if(sTop > floor4){
        $(".subFloor").eq(3).delay(300).addClass("active").siblings("li").removeClass("active");
    }
    if(sTop > floor5){
        $(".subFloor").eq(4).delay(300).addClass("active").siblings("li").removeClass("active");
    }
    if(sTop > floor6){
        $(".subFloor").eq(5).delay(300).addClass("active").siblings("li").removeClass("active");
    }
    if(sTop > floor7){
        $(".subFloor").eq(6).delay(300).addClass("active").siblings("li").removeClass("active");
    }
});

$(".subFloor").on("click",function(){
    var floor = $(this).index();
    $("html").animate({scrollTop:($(".m-Level2Category").eq(floor).offset().top)},300);
});