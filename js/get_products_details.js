(()=>{
    ajax({
        type:"get",
        url:"data/get_products_details.php",
        dataType:"json"
    }).then(resData=>{
        var html="";
        for(var p of resData){
            html+=``
        }
    })
})()