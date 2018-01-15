//面包屑导航
/*(()=>{
    ajax({
        type:"get",
        url:"data/get_Products/get_Products_Name.php",
        dataType:"json"
    }).then(resData=>{
        for(var p of resData){
            if(p.cid==1){
                document.querySelector(".top_crumbs>.crumbs")
                    .innerHTML=`<span><a href="#">首页</a></span>
                        <span>&gt</span>
                        <span>${p.cname}</span>`;
            }
        }
    })
})();*/
//加载商品二级分类名称
$(()=>{
    ajax({
        type:"get",
        url:"data/get_Products/get_Products_Name.php?cid=1",
        dataType:"json"
    }).then(resData=>{
        var html = `<a href="#" style="margin-right: 10px;" class="categoryItem active">全部</a>`;
        for(var p of resData){
            html += `<a style="margin-right: 10px;" class="categoryItemA">${p.fname}200</a>`;
        }
        //document.querySelector(".category .categoryGroup").innerHTML=html;
        $("#fk001").html(html);
    })

});

//加载home商品列表
(()=>{
    ajax({
        type:"get",
        url:"data/get_Products/wy_Home_Products.php",
        dataType:"json"
    }).then(function(resData){
        var fs = ['cptj','bz','jz','sn','byrz','js','cw',''];
        for(var d of resData){
            var fid = d.fid;
            var rows = d.data;
            var html="";
            var abc01 = '';
            for(var p of rows){
                abc01 = '';
                if(p.promotion){
                    var pmsAry = p.promotion.split("|");
                    for(var idx=0;idx<pmsAry.length;idx++){
                        if(idx%2==0){
                            abc01 += '<span class="itemTag attribute">'+pmsAry[idx]+'</span>';
                        }else{
                            abc01 += '<span class="itemTag">'+pmsAry[idx]+'</span>';
                        }
                    }
                }
                if((!p.promotion)){
                    //console.log("a and b");
                    abc01 = '<span class="itemTag_null"></span>';
                }
                var colorCount = '';
                if(p.notes){
                    colorCount = `<span class="colorSpan">${p.notes}</span>`;
                }else{
                    colorCount = `<span></span>`;
                }
                html+=`<li class="li_element">
                <div class="mproduct">
                <a href="show_Details_Page.html?pid=${p.pid}">
                <img class="img-lazyload"src="${p.cm_1}" title="${p.title}">
                <div class="colorNum">
                `+colorCount+`
                </div>
                </a>
                </div>
                <div class="bd">
                <div class="prdtTags">
                ` + abc01 + `
                </div>
                <h4 class="name">
                <a href="#">
                <span></span>
                <span>${p.title}</span>
                </a>
                </h4>
                <p class="price">
                <span>￥</span>
                <span>${p.price}</span>
                </p>
                <div class="m-product">
                <hr>
                <p class="desc">${p.subtitle}</p>
            </div>
            </div>
            </li>`;
            };
            document.querySelector("#"+fs[fid - 1]+" .m-itemList").innerHTML=html;
        }
        return;
        var html="";
        var abc01 = '';
        for(var p of resData){
            abc01 = '';
            if(p.promotion){
                var pmsAry = p.promotion.split("|");
                for(var idx=0;idx<pmsAry.length;idx++){
                    if(idx%2==0){
                        abc01 += '<span class="itemTag attribute">'+pmsAry[idx]+'</span>';
                    }else{
                        abc01 += '<span class="itemTag">'+pmsAry[idx]+'</span>';
                    }
                }
            }
            if(!(p.promotion)){
                //console.log("a and b");
                abc01 = '<span class="itemTag_null"></span>';
            }
        };
        //二级分类查询
        $(".categoryItemA").on("click", function () {
            $(".categoryItemA").html(data);
            alert("hahaha");
        })
    })
})();


//楼层滚动
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