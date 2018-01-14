/**
 * Created by Administrator on 2017-12-21.
 */
//图片轮播
var count = 0;//跑动次数
var isgo = false;//动画的执行方向
var timer;//定义计时器对象
var WIDTH;
//获取ul元素
window.onload = function () {
    var ul_img = document.getElementsByClassName("banner_img")[0];
//获取li图片元素
    var li_img = document.getElementsByClassName("li_img");
    //获取控制方向的箭头元素
    var arrow = document.getElementsByClassName("arrow");
    //获取所有按钮元素
    var div_btn = document.getElementsByClassName("div_btn");
    div_btn[0].style.backgroundColor = "aqua";
    showtime();
    function showtime(){
        timer = setInterval(function(){
                if(isgo == false){
                count++;
                ul_img.style.transform = "translate(" + -1090 * count + "px)";
                if(count>=li_img.length-1){
                    count = li_img.length-1;
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
            for(var i = 0;i<div_btn.length;i++){
                div_btn[i].style.backgroundColor = "aquamarine";
            }
            div_btn[count].style.backgroundColor = "aqua";
        },3000)
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
                if(count>2){
                    count=0;
                }
            }else {
                count--;
                if(count<0){
                    count = 2;
                }
            }
            ul_img.style.transform = "translate("+ -1090 * count +"px)";
            for (var i = 0; i < div_btn.length; i++) {
                div_btn[i].style.backgroundColor = "aquamarine";
            }
            div_btn[count].style.backgroundColor = "aqua";
        }
    }
    for(var b = 0;b<div_btn.length;b++){
        div_btn[b].index = b;
        div_btn[b].onmouseover = function () {
            clearInterval(timer);
            for (var a = 0; a < div_btn.length; a++) {
                div_btn[a].style.backgroundColor = "aquamarine";
            }
            div_btn[this.index].style.backgroundColor = "aqua";
            if(this.index == 2){
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

}