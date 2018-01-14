
//图片轮播

(()=>{
    var category = location.href.split("/").pop().split(".")[0];
    console.log(category);
    ajax({
        type:"get",
        url:"data/getBanners.php",
        data:"category="+category,
        dataType:"json"
    }).then(data=>{
        var count = 0;//跑动次数
        var isgo = false;//动画的执行方向
        var timer;//定义计时器对象
        var WIDTH=1090;
//        获取ul元素
        var ul_img = document.getElementsByClassName("banner_img")[0];
        //获取控制方向的箭头元素
        var arrow = document.getElementsByClassName("arrow");
        //获取所有按钮元素
        var div_btn = document.getElementsByClassName("div_btn");
        var html="",dotHtml="";
        for(var p of data){
            html+= `<li class="li_img">
                     <a href="#">
                        <img src="${p.src}">
                      </a>
                    </li>`;
            dotHtml += `<li class="div_btn"></li>`;
        }
        document.querySelector(".banner .banner_img").innerHTML=html;
        document.querySelector(".banner .indi").innerHTML=dotHtml;
        showtime();
        function showtime(){
            timer = setInterval(function(){
                if(isgo == false){
                    count++;
                    ul_img.width=WIDTH*data.length;
                    ul_img.style.transform = "translate(" + -1090 * count + "px)";
                    if(count>=data.length-1){
                        count = data.length-1;
                        isgo = true;
                    }
                }else {
                    count--;
                    ul_img.style.transform = "translate(" + -1090 * count + "px)";
                    if(count<=0){
                        count = 0;
                        isgo = false;
                    }
                }
                for(var i = 0;i<data.length;i++){
                    div_btn[i].style.backgroundColor = "#bfbbba";
                }
                div_btn[count].style.backgroundColor = "#b4a078";
            },2000)
        }
        //左右按钮事件
        for(var i = 0;i<arrow.length;i++){
            arrow[i].onmouseover = function(){
                clearInterval(timer);
            }
            arrow[i].onmouseout = function () {
                showtime();
            }
            arrow[i].onclick = function () {
                if(this.title==0){
                    count++;
                    if(count>data.length-1){
                        count=0;
                    }
                }else {
                    count--;
                    if(count<0){
                        count = data.length-1;
                    }
                }
                ul_img.style.transform = "translate("+ -1090 * count +"px)";
                for (var i = 0; i < data.length; i++) {
                    div_btn[i].style.backgroundColor = "#bfbbba";
                }
                div_btn[count].style.backgroundColor = "#b4a078";
            }
        }
        for(var b = 0;b<div_btn.length;b++){
            div_btn[b].index = b;
            div_btn[b].onmouseover = function () {
                clearInterval(timer);
                for (var a = 0; a < div_btn.length; a++) {
                    div_btn[a].style.backgroundColor = "#bfbbba";
                }
                div_btn[this.index].style.backgroundColor = "#b4a078";
                if(this.index == data.length){
                    isgo = true;
                }
                if(this.index == 0){
                    isgo = false;
                }
                count = this.index;
                ul_img.style.transform = "translate("+ -1090 * this.index +"px)";
            }
            div_btn[b].onmouseout = function () {
                showtime();
            }
        }
        ul_img.onmouseover = function () {
            clearInterval(timer);
            this.timer = null;
        }
        ul_img.onmouseout = function () {
            showtime();
        }
        var banner = document.getElementsByClassName("banner")[0];
        banner.onmouseover = function () {
            document.getElementById('btns').style.display = "block";
        }
        banner.onmouseout = function () {
            document.getElementById('btns').style.display = "none";
        }

    })

})()