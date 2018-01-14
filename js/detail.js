/**
 * Created by Administrator on 2017/12/28.
 */
    //评价详情tab切换

//获取产品ID
var pid = location.search.substr(1).split("=")[1];

var tabs = document.getElementsByClassName("detail_heard")[0].getElementsByTagName("div");
var divs = document.getElementsByClassName("particulars")[0].getElementsByTagName("div");
for(var i = 0;i<tabs.length;i++){
    tabs[i].onclick=function(){change(this);}
}
function change(obj){
    for(var i = 0;i<tabs.length;i++){
        if(tabs[i]==obj){
            tabs[i].className = "d1";
            divs[i].className = "m_attrList";
            tabs[i].style.backgroundColor = "white";

        }else  {
            tabs[i].className = "";
            divs[i].className = "";
            tabs[i].style.backgroundColor = "#e8e8e8";
        }
    }
}

//商品颜色切换
    /*var imgs = document.querySelectorAll(".m_parampicker>.specProp img");
    var titles = document.querySelectorAll(".m_parampicker>.specProp .title");

    for(i=0;i<imgs.length;i++){
        imgs[i].onmouseover = function () {
            this.nextSibling.nextSibling.style.display="block";
            this.nextSibling.nextSibling.style.zIndex=999;
        }
        imgs[i].onmouseout = function () {
            for(var j =0;j<titles.length;j++){
                titles[j].style.display = "none";
            }
        }
    }*/

    $(".jsColor").on('mouseover','img',function(){
        $(this).next().css({
            'display':"block",
            'z-index':999
        })
    });
    $(".jsColor").on('mouseout','img',function(){
        $(this).next().css({
            'display':"none"
        });
        console.log('out....');
    });

//大家都在看图片按钮事件
    document.getElementById("leftBig").style.backgroundColor = "#E8E8E8";
    var n = 0;
    var lis = document.querySelectorAll(".m_itemdiv>.item");
    document.getElementById("rightBig").addEventListener('click',function(){
        n++;
        if(lis.length - 4 - 1 >= n){
            document.getElementById("leftBig").style.backgroundColor = "#b19e7a";
        }else{
            this.style.backgroundColor = "#E8E8E8";
        }
        if(lis.length - 4 > 0 && n < (lis.length + 1 - 4)){
            document.getElementsByClassName("m_itemdiv")[0].style.transform = "translate("+ -234*n +"px)";
        }else{
            n = lis.length - 4;
        }
    });
    document.getElementById("leftBig").addEventListener('click',function(){
        n--;
        if(n<1){
            this.style.backgroundColor = "#E8E8E8";
        }
        if(n<0){
            n=0;
            return;
        }
        document.getElementById("rightBig").style.backgroundColor = "#b19e7a";
        document.getElementsByClassName("m_itemdiv")[0].style.transform = "translate("+ (-n*234 + 0) +"px)";
    });


//商品详情页图片显示
    /*var hhhhh = document.getElementsByClassName("m_slide")[0].getElementsByTagName("li");
    for(var x=0;x<hhhhh.length;x++){
        hhhhh[x].addEventListener('mouseover',function(){
            document.getElementById("bigImg").src = this.childNodes[1].src;
        });
    }*/
    $(".m_slide").on('mouseover','li',function(){
        $("#bigImg").attr('src' ,$(this).children(0).attr("src"));
    });

    document.getElementById("heihei").addEventListener("click",function(){
        var mdiv = document.getElementsByClassName("m-report-modal")[0];
        mdiv.style.display = "block";
    });

(()=>{
    ajax({
        type:"get",
        url:"data/a.php?pid=" + pid,
        dataType:"json"
    }).then(resData=>{
        console.log(resData);
        $(".intro>.name").html(resData.title);
        if(resData.producter){
            $(".intro>.detailTag").html(resData.producter);
        }else{
            $(".intro>.detailTag").css({
                "border":"none",
                "backgroundColor":"#FFFFFF"
            });
        }
        $(".intro>.desc").html(resData.subtitle);
        $(".price> .num").html(resData.price);
        $(".j_commentEntry>span:first").text(resData.evaluate);
        if(resData.coupon && resData.promotion){
            var promotions = resData.promotion.split("|");
            var coupons = resData.coupon.split("|");
            var cxhtml = '<span class="label">促销</span>';
            for(var idx = 0; idx<promotions.length;idx++){
                cxhtml += `<a href="">
                                <span class="pointCt">${promotions[idx]}</span>
                                <span class="pointCt">${coupons[idx]}</span>
                            </a>`;
            }
        }
        $("#cuxiao").html(cxhtml);
        $(".pointtt").html(resData.integral);
        var policys = resData.promise.split("|");
        var policyHtml = ``;
        for(var p of policys){
            policyHtml += `<div class="j_policyPop">
                                    <span>&nbsp;</span>
                                    <span>${p}</span>
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                </div>`;
        }
        $(".policyBox").html(policyHtml);
        //img
        var imgHtml = ``;
            imgHtml += `<li><img src="${resData.cm_1}" alt=""></li>`;
            imgHtml += `<li class="li_top"><img src="${resData.cm_2}" alt=""></li>`;
            imgHtml += `<li class="li_top"><img src="${resData.cm_3}" alt=""></li>`;
            imgHtml += `<li class="li_top"><img src="${resData.cm_4}" alt=""></li>`;
            imgHtml += `<li class="li_top"><img src="${resData.cm_5}" alt=""></li>`;
        $(".list>ul").html(imgHtml);
        $("#bigImg").attr("src",resData.cm_1);
        //尺寸
        var specHtml = '';
        var count = 0;
        var colorHtml = ``;
        for(var s of resData.details){
            count++;
            var bd = '';
            if(count == 1){
                bd = style="border:2px solid green";
            }

            //如果没有尺寸，则只显示颜色
            if(!s.spec){
                for(var d of s.data){
                    colorHtml += `<li class="tab_con specCount`+count+`">
                            <a href="#">
                                <img src="${d.sm}" alt="">
                                <div class="title" style="display: none; z-index: 999;">${d.color}</div>
                            </a>
                        </li>`;
                }
            }else{
                //有尺寸
                specHtml += `<li class="tab_con1" id="specCount`+count+`">
                            <a href="#">
                                <span class="txt">${s.spec}</span>
                            </a>
                        </li>`;
                //尺寸对应的图片
                if(1 == count){
                    //显示第一种尺寸
                    for(var d of s.data){
                        if(d.color){
                            colorHtml += `<li class="tab_con specCount`+count+`">
                                        <a href="#">
                                            <img src="${d.sm}" alt="">
                                            <div class="title" style="display: none; z-index: 999;">${d.color}</div>
                                        </a>
                                    </li>`;
                        }
                    }
                }else{
                    //其他尺寸暂时隐藏，待点击对应的尺寸显示
                    for(var d of s.data){
                        if(d.color){
                            colorHtml += `<li class="tab_con hide specCount`+count+`">
                                        <a href="#">
                                            <img src="${d.sm}" alt="">
                                            <div class="title" style="display: none; z-index: 999;">${d.color}</div>
                                        </a>
                                    </li>`;
                        }
                    }
                }
            }


        }
        if(!colorHtml){
            $(".jsColorRow").addClass("hide");
        }
        if(!specHtml){
            $(".jsSizeRow").addClass("hide");
        }
        $(".jsSpec>.tabs").html(specHtml);
        $(".jsColor>.tabs").html(colorHtml);
    })
})();


//点击尺寸显示对应尺寸的图片
$(".jsSpec").on('click','li',function(){
    $(".jsColor li").addClass("hide");
    $(".jsColor li."+$(this).attr("id")).removeClass("hide");
    $(this).siblings().find(".txt").css({
        "border":"1px solid #e8e8e8"
    });
    $(this).find(".txt").css({
        "border":"solid 2px green"
    });
});

//点击颜色图片，显示对应左边大图
$(".jsColor").on('click','li',function(){
    $("#bigImg").attr('src',$(this).find('img').attr("src"));
    $(this).siblings().css({"borderStyle":"none"});
    $(this).css({
        "border":"2px solid #b4a078"
    });
});

console.log("产品id：" + location.search.substr(1));