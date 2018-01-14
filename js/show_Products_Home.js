
//面包屑导航
/*(()=>{
    ajax({
        type:"get",
        url:"data/get_home_products/get_Products_Name.php",
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
//加载商品分类名称
(()=>{
    ajax({
        type:"get",
        url:"data/get_home_products/get_Products_Name.php?cid=1",
        dataType:"json"
    }).then(resData=>{
        var html = `<a href="#" style="margin-right: 10px;" class="categoryItem active">全部</a>`;
        for(var p of resData){
            html += `<a style="margin-right: 10px;" class="categoryItemA">${p.fname}</a>`;
        }
        //document.querySelector(".category .categoryGroup").innerHTML=html;
        $("#fk001").html(html);
    })
})();

//加载床品套件商品列表
(()=>{
    ajax({
        type:"get",
        url:"data/get_home_products/wy_Home_Cptj.php",
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
        //
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
           //html+=`<li class="li_element">
           //     <div class="mproduct">
           //     <a href="show_Details_Page.html">
           //     <img class="img-lazyload"src="${p.cm_1}" title="${p.title}">
           //     <div class="colorNum">
           //     <span>${p.notes}色可选</span>
           //     </div>
           //     </a>
           //     </div>
           //     <div class="bd">
           //     <div class="prdtTags">
           //     ` + abc01 + `
           //     </div>
           //     <h4 class="name">
           //     <a href="#">
           //     <span></span>
           //     <span>${p.title}</span>
           //     </a>
           //     </h4>
           //     <p class="price">
           //     <span>￥</span>
           //     <span>${p.price}</span>
           //     </p>
           //     <div class="m-product">
           //     <hr>
           //     <p class="desc">${p.subtitle}</p>
           // </div>
           // </div>
           // </li>`;
        };
        //document.querySelector("#cptj .m-itemList").innerHTML=html;
    })
})();
/*
//加载被枕商品列表
(()=>{
    ajax({
        type:"get",
        url:"data/get_home_products/wy_Home_Bz.php",
        dataType:"json"
    }).then(function(resData){
        var html="";
        for(var i= 0;i<resData.length;i++){
            var p=resData[i];
            html+=`<li class="li_element">
                <div class="mproduct">
                <a href="show_Details_Page.html">
                <img class="img-lazyload"src="${p.cm_1}" title="${p.title}">
                <div class="test">
                <span></span>
                <span></span>
                </div>
                </a>
                </div>
                <div class="bd">
                <div class="prdtTags">
                <span class="itemTag_null"></span>
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
        document.querySelector("#bz .m-itemList").innerHTML=html;
    })
})();
//加载家具商品列表
(()=>{
    ajax({
        type:"get",
        url:"data/get_home_products/wy_Home_Jz.php",
        dataType:"json"
    }).then(function(resData){
        var html="";
        for(var i= 0;i<resData.length;i++){
            var p=resData[i];
            html+=`<li class="li_element">
                <div class="mproduct">
                <a href="show_Details_Page.html">
                <img class="img-lazyload"src="${p.cm_1}" title="${p.title}">
                <div class="test">
                <span></span>
                <span></span>
                </div>
                </a>
                </div>
                <div class="bd">
                <div class="prdtTags">
                <span class="itemTag_null"></span>
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
        document.querySelector("#jz .m-itemList").innerHTML=html;
    })
})();
//加载收纳商品列表
(function(){
    ajax({
        type:"get",
        url:"data/get_home_products/wy_Home_Sn.php",
        dataType:"json"
    }).then(function(resData){
        var html="";
        for(var i= 0;i<resData.length;i++){
            var p=resData[i];
            html+=`<li class="li_element">
                <div class="mproduct">
                <a href="show_Details_Page.html">
                <img class="img-lazyload"src="${p.cm_1}" title="${p.title}">
                <div class="test">
                <span></span>
                <span></span>
                </div>
                </a>
                </div>
                <div class="bd">
                <div class="prdtTags">
                <span class="itemTag_null"></span>
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
        document.querySelector("#sn .m-itemList").innerHTML=html;
    })
})();
//加载布艺软装商品列表
(function(){
    ajax({
        type:"get",
        url:"data/get_home_products/wy_Home_Byrz.php",
        dataType:"json"
    }).then(function(resData){
        var html="";
        for(var i= 0;i<resData.length;i++){
            var p=resData[i];
            html+=`<li class="li_element">
                <div class="mproduct">
                <a href="show_Details_Page.html">
                <img class="img-lazyload"src="${p.cm_1}" title="${p.title}">
                <div class="test">
                <span></span>
                <span></span>
                </div>
                </a>
                </div>
                <div class="bd">
                <div class="prdtTags">
                <span class="itemTag_null"></span>
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
        document.querySelector("#byrz .m-itemList").innerHTML=html;
    })
})();
//加载家饰商品列表
(function(){
    ajax({
        type:"get",
        url:"data/get_home_products/wy_Home_Js.php",
        dataType:"json"
    }).then(function(resData){
        var html="";
        for(var i= 0;i<resData.length;i++){
            var p=resData[i];
            html+=`<li class="li_element">
                <div class="mproduct">
                <a href="show_Details_Page.html">
                <img class="img-lazyload"src="${p.cm_1}" title="${p.title}">
                <div class="test">
                <span></span>
                <span></span>
                </div>
                </a>
                </div>
                <div class="bd">
                <div class="prdtTags">
                <span class="itemTag_null"></span>
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
        document.querySelector("#js .m-itemList").innerHTML=html;
    })
})();
//加载宠物商品列表
(function(){
    ajax({
        type:"get",
        url:"data/get_home_products/wy_Home_Cw.php",
        dataType:"json"
    }).then(function(resData){
        var html="";
        for(var i= 0;i<resData.length;i++){
            var p=resData[i];
            html+=`<li class="li_element">
                <div class="mproduct">
                <a href="show_Details_Page.html">
                <img class="img-lazyload"src="${p.cm_1}" title="${p.title}">
                <div class="test">
                <span></span>
                <span></span>
                </div>
                </a>
                </div>
                <div class="bd">
                <div class="prdtTags">
                <span class="itemTag_null"></span>
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
        document.querySelector("#cw .m-itemList").innerHTML=html;
    })
})();
*/